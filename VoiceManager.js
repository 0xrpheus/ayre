/**
 * VoiceManager.js
 * Handles Web Speech API voice commands for Ayre's voice-only mode.
 * Parses continuous speech and routes commands to drumManager and musicManager.
 */

const BACKEND_URL = "https://epidaurus-production.up.railway.app";

// Confidence threshold — ignore low-confidence transcripts
const CONFIDENCE_THRESHOLD = 0.55;

// How long (ms) to debounce repeated identical commands
const COMMAND_DEBOUNCE_MS = 800;

// ── Instrument aliases ──────────────────────────────────────────────────────
const INSTRUMENT_ALIASES = {
    kick: ["kick", "base kick", "bass kick", "bd", "kick drum", "foot"],
    snare: ["snare", "snare drum", "snap", "snair"],
    hihat: ["hi-hat", "hihat", "hi hat", "hat", "high hat", "hats"],
    clap: ["clap", "claps", "handclap", "hand clap"],
    bass_drop: ["bass drop", "bass", "drop", "sub"],
    bass_synth: ["bass synth", "synth bass", "bassline"],
    bell: ["bell", "bells", "ding", "chime"],
    cymbal: ["cymbal", "crash", "ride", "plate"],
    piano: ["piano", "keys", "keyboard", "ivories"],
};

// ── Scale / pitch aliases ───────────────────────────────────────────────────
const PITCH_NOTES = [
    "C3",
    "Eb3",
    "F3",
    "G3",
    "Bb3",
    "C4",
    "Eb4",
    "F4",
    "G4",
    "Bb4",
    "C5",
    "Eb5",
];

const NOTE_ALIASES = {
    c3: "C3",
    "c 3": "C3",
    "e flat 3": "Eb3",
    eb3: "Eb3",
    "e b 3": "Eb3",
    f3: "F3",
    "f 3": "F3",
    g3: "G3",
    "g 3": "G3",
    "b flat 3": "Bb3",
    bb3: "Bb3",
    c4: "C4",
    "c 4": "C4",
    "middle c": "C4",
    "e flat 4": "Eb4",
    eb4: "Eb4",
    f4: "F4",
    "f 4": "F4",
    g4: "G4",
    "g 4": "G4",
    "b flat 4": "Bb4",
    bb4: "Bb4",
    c5: "C5",
    "c 5": "C5",
    "e flat 5": "Eb5",
    eb5: "Eb5",
};

export class VoiceManager {
    /**
     * @param {object} drumManagerRef  - The drumManager module
     * @param {object} musicManagerRef - The MusicManager instance
     * @param {object} gameRef         - The Game instance (for waveform color callbacks)
     * @param {function} onStatusChange - Called with (statusText) for UI feedback
     * @param {function} onCommandFired - Called with (commandLabel) for UI flash
     */
    constructor(
        drumManagerRef,
        musicManagerRef,
        gameRef,
        onStatusChange,
        onCommandFired,
    ) {
        this.drumManager = drumManagerRef;
        this.musicManager = musicManagerRef;
        this.game = gameRef;
        this.onStatusChange = onStatusChange || (() => { });
        this.onCommandFired = onCommandFired || (() => { });

        this.recognition = null;
        this.isListening = false;

        // Persistent drum state — voice mode owns this
        this.voiceDrumState = {};

        // Pitch state
        this.currentPitchIndex = 5; // default C4

        // Volume state 0–1
        this.currentVolume = 0.6;

        // Debounce: track last command + timestamp
        this._lastCommand = "";
        this._lastCommandTime = 0;

        // Whether arpeggio is playing in voice mode
        this._arpeggioActive = false;

        // Track virtual finger keys added to the drum map so we can clean them up
        this._virtualKeys = new Set();

        this._setupRecognition();
    }

    // ── Setup ────────────────────────────────────────────────────────────────

    _setupRecognition() {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn(
                "VoiceManager: Web Speech API not supported in this browser.",
            );
            return;
        }

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = false;
        this.recognition.lang = "en-US";
        this.recognition.maxAlternatives = 3;

        this.recognition.onresult = (event) => {
            const result = event.results[event.results.length - 1];
            if (!result.isFinal) return;

            let bestTranscript = null;
            let bestConfidence = 0;

            for (let i = 0; i < result.length; i++) {
                const alt = result[i];
                if (alt.confidence > bestConfidence) {
                    bestConfidence = alt.confidence;
                    bestTranscript = alt.transcript;
                }
            }

            if (!bestTranscript) return;
            // Some browsers always return 0 confidence — allow those through
            if (bestConfidence > 0 && bestConfidence < CONFIDENCE_THRESHOLD) {
                console.log(
                    `[Voice] Low confidence (${bestConfidence.toFixed(2)}), ignoring: "${bestTranscript}"`,
                );
                return;
            }

            const text = bestTranscript.trim().toLowerCase();
            console.log(
                `[Voice] Heard: "${text}" (confidence: ${bestConfidence.toFixed(2)})`,
            );
            this._parseCommand(text);
        };

        this.recognition.onerror = (event) => {
            if (event.error === "no-speech") return;
            if (event.error === "aborted") return;
            console.warn("[Voice] Recognition error:", event.error);
            this.onStatusChange(`error: ${event.error}`);
        };

        this.recognition.onend = () => {
            if (this.isListening) {
                try {
                    this.recognition.start();
                } catch (e) { }
            }
        };
    }

    // ── Public API ───────────────────────────────────────────────────────────

    start() {
        if (!this.recognition) {
            this.onStatusChange("not supported");
            return;
        }
        if (this.isListening) return;
        this.isListening = true;

        this._startArpeggio();

        try {
            this.recognition.start();
            this.onStatusChange("listening");
            console.log("[Voice] Recognition started.");
        } catch (e) {
            console.warn("[Voice] Could not start recognition:", e);
        }
    }

    stop() {
        if (!this.recognition) return;
        this.isListening = false;

        this._stopArpeggio();

        // Clean up all virtual finger keys we added to the drum map
        this._virtualKeys.forEach((key) => {
            this.drumManager.updateFingerMapping(key, "none");
        });
        this._virtualKeys.clear();

        this.drumManager.updateActiveDrums({});
        this.voiceDrumState = {};

        try {
            this.recognition.abort();
        } catch (e) { }

        this.onStatusChange("off");
        console.log("[Voice] Recognition stopped.");
    }

    // ── Command Parser ───────────────────────────────────────────────────────

    _parseCommand(text) {
        const now = Date.now();
        if (
            text === this._lastCommand &&
            now - this._lastCommandTime < COMMAND_DEBOUNCE_MS
        ) {
            return;
        }

        // ── 1. Drum on/off ──
        for (const [instrument, aliases] of Object.entries(
            INSTRUMENT_ALIASES,
        )) {
            for (const alias of aliases) {
                if (text.includes(alias)) {
                    const isOff =
                        text.includes("off") ||
                        text.includes("stop") ||
                        text.includes("mute") ||
                        text.includes("kill") ||
                        text.includes("remove");

                    const isOn =
                        text.includes("on") ||
                        text.includes("play") ||
                        text.includes("start") ||
                        text.includes("add") ||
                        text.includes("enable");

                    if (isOff) {
                        this._setDrum(instrument, false);
                        this._fire(`${instrument} off`);
                        this._debounce(text);
                        return;
                    }
                    if (isOn) {
                        this._setDrum(instrument, true);
                        this._fire(`${instrument} on`);
                        this._debounce(text);
                        return;
                    }
                    // Instrument name alone = toggle
                    this._setDrum(instrument, !this.voiceDrumState[instrument]);
                    this._fire(`${instrument} toggle`);
                    this._debounce(text);
                    return;
                }
            }
        }

        // ── 2. "all off" / "clear" / "reset" ──
        if (
            text.match(
                /\b(all off|clear|reset drums|silence|quiet|stop everything)\b/,
            )
        ) {
            this.voiceDrumState = {};
            this.drumManager.updateActiveDrums({});
            this._fire("all off");
            this._debounce(text);
            return;
        }

        // ── 3. Pitch control ──
        if (text.match(/\b(pitch up|higher|up|ascend)\b/)) {
            this.currentPitchIndex = Math.min(
                PITCH_NOTES.length - 1,
                this.currentPitchIndex + 1,
            );
            this._updatePitch();
            this._fire(`pitch → ${PITCH_NOTES[this.currentPitchIndex]}`);
            this._debounce(text);
            return;
        }
        if (text.match(/\b(pitch down|lower|down|descend)\b/)) {
            this.currentPitchIndex = Math.max(0, this.currentPitchIndex - 1);
            this._updatePitch();
            this._fire(`pitch → ${PITCH_NOTES[this.currentPitchIndex]}`);
            this._debounce(text);
            return;
        }

        for (const [spoken, note] of Object.entries(NOTE_ALIASES)) {
            if (text.includes(spoken)) {
                const idx = PITCH_NOTES.indexOf(note);
                if (idx !== -1) {
                    this.currentPitchIndex = idx;
                    this._updatePitch();
                    this._fire(`pitch → ${note}`);
                    this._debounce(text);
                    return;
                }
            }
        }

        // ── 4. Volume ──
        if (
            text.match(
                /\b(louder|volume up|turn it up|more volume|increase volume)\b/,
            )
        ) {
            this.currentVolume = Math.min(1.0, this.currentVolume + 0.15);
            this.musicManager.updateArpeggioVolume(0, this.currentVolume);
            this._fire(`vol ${Math.round(this.currentVolume * 100)}%`);
            this._debounce(text);
            return;
        }
        if (
            text.match(
                /\b(softer|quieter|volume down|turn it down|less volume|decrease volume)\b/,
            )
        ) {
            this.currentVolume = Math.max(0.05, this.currentVolume - 0.15);
            this.musicManager.updateArpeggioVolume(0, this.currentVolume);
            this._fire(`vol ${Math.round(this.currentVolume * 100)}%`);
            this._debounce(text);
            return;
        }

        // ── 5. Synth cycling ──
        if (
            text.match(
                /\b(next synth|change synth|switch synth|cycle synth|new sound|change sound)\b/,
            )
        ) {
            this.musicManager.cycleSynth();
            this._stopArpeggio();
            setTimeout(() => this._startArpeggio(), 100);
            this._fire(`synth ${this.musicManager.currentSynthIndex + 1}`);
            this._debounce(text);
            return;
        }

        // ── 6. Arpeggio on/off ──
        if (
            text.match(
                /\b(play music|start music|play arp|arpeggio on|melody on)\b/,
            )
        ) {
            this._startArpeggio();
            this._fire("arpeggio on");
            this._debounce(text);
            return;
        }
        if (
            text.match(
                /\b(stop music|pause music|stop arp|arpeggio off|melody off|no music)\b/,
            )
        ) {
            this._stopArpeggio();
            this._fire("arpeggio off");
            this._debounce(text);
            return;
        }

        // ── 7. AI Synth generation ──
        const generateMatch = text.match(
            /(?:generate|make a?|create a?)\s+(.+?)(?:\s+(?:sound|synth|preset))?$/,
        );
        if (generateMatch && generateMatch[1]) {
            const vibe = generateMatch[1].trim();
            this._fire(`generating: ${vibe}`);
            this._debounce(text);
            this._triggerAIGenerate(vibe);
            return;
        }

        console.log(`[Voice] No command matched for: "${text}"`);
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    _setDrum(instrument, active) {
        if (active) {
            this.voiceDrumState[instrument] = true;
        } else {
            delete this.voiceDrumState[instrument];
        }
        this._pushDrumState();
    }

    _pushDrumState() {
        const fingerMap = this.drumManager.getFingerToDrumMap();
        const activeInstruments = Object.keys(this.voiceDrumState);

        const syntheticStates = {};
        const reverseMap = {};

        for (const [finger, inst] of Object.entries(fingerMap)) {
            // Only reverse-map real fingers, not virtual keys we added
            if (!finger.startsWith("__voice_")) {
                reverseMap[inst] = finger;
            }
        }

        for (const inst of activeInstruments) {
            if (reverseMap[inst]) {
                syntheticStates[reverseMap[inst]] = true;
            } else {
                // Add a virtual key for instruments not in the current finger map
                const virtualKey = `__voice_${inst}`;
                if (!this._virtualKeys.has(virtualKey)) {
                    this.drumManager.updateFingerMapping(virtualKey, inst);
                    this._virtualKeys.add(virtualKey);
                }
                syntheticStates[virtualKey] = true;
            }
        }

        this.drumManager.updateActiveDrums(syntheticStates);
    }

    _startArpeggio() {
        if (!this.musicManager.isStarted) return;
        if (this._arpeggioActive) {
            this.musicManager.updateArpeggio(
                0,
                PITCH_NOTES[this.currentPitchIndex],
            );
            return;
        }
        this.musicManager.startArpeggio(0, PITCH_NOTES[this.currentPitchIndex]);
        this.musicManager.updateArpeggioVolume(0, this.currentVolume);
        this._arpeggioActive = true;
    }

    _stopArpeggio() {
        if (this._arpeggioActive) {
            this.musicManager.stopArpeggio(0);
            this._arpeggioActive = false;
        }
    }

    _updatePitch() {
        const note = PITCH_NOTES[this.currentPitchIndex];
        if (this._arpeggioActive) {
            this.musicManager.updateArpeggio(0, note);
        } else {
            this._startArpeggio();
        }
    }

    _fire(label) {
        this.onCommandFired(label);
        this.onStatusChange(`heard: ${label}`);
        setTimeout(() => {
            if (this.isListening) this.onStatusChange("listening");
        }, 1800);
    }

    _debounce(text) {
        this._lastCommand = text;
        this._lastCommandTime = Date.now();
    }

    async _triggerAIGenerate(vibe) {
        try {
            const response = await fetch(`${BACKEND_URL}/api/generate-synth`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ vibe: vibe.slice(0, 200).replace(/[`"\\]/g, '') }),
            });
            if (!response.ok)
                throw new Error(`Server error: ${response.status}`);
            const data = await response.json();

            this.musicManager.applyAIPreset(data.preset);

            if (data.color && this.game?.waveformVisualizer) {
                const THREE = await import("three");
                this.game.waveformVisualizer.updateColor(
                    new THREE.Color(data.color),
                );
            }

            this._fire(`AI: ${vibe}`);
            this._stopArpeggio();
            setTimeout(() => this._startArpeggio(), 100);
        } catch (err) {
            console.error("[Voice] AI generate failed:", err);
            this.onStatusChange("AI failed");
        }
    }
}
