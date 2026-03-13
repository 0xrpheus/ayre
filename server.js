import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate-synth', async (req, res) => {
    try {
        const vibe = req.body.vibe?.slice(0, 200).replace(/[`"\\]/g, '') ?? '';
        if (!vibe) return res.status(400).json({ error: 'vibe required' });
        const blocked = /ignore|instructions|system prompt|prompt|override|forget|pretend|you are|act as/i;
        if (blocked.test(vibe)) return res.status(400).json({ error: 'invalid vibe' });
        // Use the fast flash model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
        You are an expert sound designer creating a synthesizer preset for Tone.js FMSynth.
        The user wants a sound with this vibe: "${vibe}".
        
        Return ONLY a raw JSON object (no markdown formatting, no backticks, no explanations) containing two keys:
        1. "color": A hex color code string (e.g. "#FF00FF") that visually represents the vibe.
        2. "preset": An object matching Tone.js FMSynth configuration. It MUST include these exact keys with appropriate musical values:
            - harmonicity (number, e.g., 0.5 to 10)
            - modulationIndex (number, e.g., 1 to 20)
            - oscillator: { type: "sine" | "square" | "triangle" | "sawtooth" }
            - envelope: { attack (number), decay (number), sustain (number), release (number) }
            - modulation: { type: "sine" | "square" | "triangle" | "sawtooth" }
            - modulationEnvelope: { attack (number), decay (number), sustain (number), release (number) }
        `;

        const result = await model.generateContent(prompt);
        let textResult = result.response.text().trim();

        // Strip potential markdown code blocks if the AI includes them by accident
        if (textResult.startsWith('```')) {
            textResult = textResult.replace(/^```json\n?/, '').replace(/\n?```$/, '');
        }

        const parsedData = JSON.parse(textResult);
        res.json(parsedData);

    } catch (error) {
        console.error("Error generating preset:", error);
        res.status(500).json({ error: "Failed to generate synth preset." });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
