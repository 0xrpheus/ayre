function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    "next",
                    value,
                );
            }
            function _throw(err) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    "throw",
                    err,
                );
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i =
        arr == null
            ? null
            : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) ||
            arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function _object_spread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(source, sym)
                        .enumerable;
                }),
            );
        }
        ownKeys.forEach(function (key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return (
        _array_with_holes(arr) ||
        _iterable_to_array_limit(arr, i) ||
        _unsupported_iterable_to_array(arr, i) ||
        _non_iterable_rest()
    );
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f,
        y,
        t,
        g,
        _ = {
            label: 0,
            sent: function () {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: [],
        };
    return (
        (g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2),
        }),
        typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
            return this;
        }),
        g
    );
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (
                    ((f = 1),
                        y &&
                        (t =
                            op[0] & 2
                                ? y["return"]
                                : op[0]
                                    ? y["throw"] ||
                                    ((t = y["return"]) && t.call(y), 0)
                                    : y.next) &&
                        !(t = t.call(y, op[1])).done)
                )
                    return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false,
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (
                            !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                            (op[0] === 6 || op[0] === 2)
                        ) {
                            _ = 0;
                            continue;
                        }
                        if (
                            op[0] === 3 &&
                            (!t || (op[1] > t[0] && op[1] < t[3]))
                        ) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true,
        };
    }
}
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
    HandLandmarker,
    FilesetResolver,
} from "https://esm.sh/@mediapipe/tasks-vision@0.10.14";
import { MusicManager } from "./MusicManager.js";
import * as Tone from "https://esm.sh/tone";
import * as drumManager from "./DrumManager.js";
import { WaveformVisualizer } from "./WaveformVisualizer.js";
import { VoiceManager } from "./VoiceManager.js";

// --- FIX (issue #4): GPU delegate fallback ---
// Attempts to create a HandLandmarker with GPU delegate first.
// If that fails (unsupported hardware, VM, certain Linux configs),
// retries transparently with CPU delegate so the app remains functional.
async function createLandmarker(vision, options) {
    try {
        return await HandLandmarker.createFromOptions(vision, options);
    } catch (gpuErr) {
        console.warn("GPU delegate failed, falling back to CPU:", gpuErr);
        return await HandLandmarker.createFromOptions(vision, {
            ...options,
            baseOptions: { ...options.baseOptions, delegate: "CPU" },
        });
    }
}

export var Game = /*#__PURE__*/ (function () {
    "use strict";
    function Game(renderDiv) {
        var _this = this;
        _class_call_check(this, Game);
        this.renderDiv = renderDiv;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.videoElement = null;
        this.handLandmarker = null;
        this.lastVideoTime = -1;
        this.hands = [];
        this.handLineMaterial = null;
        // FIX: promoted from inline per-frame allocation to a single shared instance
        this.thumbIndexLineMaterial = null;
        this.fingertipMaterialHand1 = null;
        this.fingertipMaterialHand2 = null;
        this.fingertipLandmarkIndices = [0, 4, 8, 12, 16, 20];
        this.handConnections = null;
        this.gameState = "loading";
        this.gameOverText = null;
        this.clock = new THREE.Clock();
        this.musicManager = new MusicManager();
        this.waveformVisualizer = null;
        this.lastLandmarkPositions = [[], []];
        this.smoothingFactor = 0.4;
        this.loadedModels = {};
        this.beatIndicators = [];
        this.beatIndicatorMaterials = [];
        this.beatIndicatorColors = {
            kick: new THREE.Color("#D72828"),
            snare: new THREE.Color("#F36E2F"),
            clap: new THREE.Color("#7B4394"),
            hihat: new THREE.Color("#84C34E"),
            bass_synth: new THREE.Color("#0d2c51"),
            bass_drop: new THREE.Color("#FF2DA6"),
            bell: new THREE.Color("#00E5FF"),
            cymbal: new THREE.Color("#FFD400"),
            piano: new THREE.Color("#A259FF"),
            off: new THREE.Color("#ffffff"),
        };
        this.beatIndicatorGroup = null;
        this.labelColors = {
            evaPurple: { r: 123, g: 67, b: 148, a: 0.9 },
            evaGreen: { r: 132, g: 195, b: 78, a: 0.9 },
            evaOrange: { r: 243, g: 110, b: 47, a: 0.9 },
            evaRed: { r: 215, g: 40, b: 40, a: 0.9 },
            white: { r: 255, g: 255, b: 255, a: 1.0 },
            black: { r: 0, g: 0, b: 0, a: 1.0 },
        };
        this.waveformColors = [
            new THREE.Color("#7B4394"),
            new THREE.Color("#84C34E"),
            new THREE.Color("#F36E2F"),
            new THREE.Color("#D72828"),
            new THREE.Color("#66ffff"),
            new THREE.Color("#0d2c51"),
            new THREE.Color("#FF2DA6"),
            new THREE.Color("#00E5FF"),
            new THREE.Color("#FFD400"),
            new THREE.Color("#A259FF"),
        ];

        this.currentMode = "default";
        this.voiceManager = null;

        this.isMicOn = false;
        this.micStream = null;
        this.micAnalyser = null;
        this.micData = null;
        this.micRAF = null;
        this.micMonitorEl = null;

        this._init().catch(function (error) {
            console.error("Initialization failed:", error);
            _this._showError("Initialization failed. Check console.");
        });
    }
    _create_class(Game, [
        {
            key: "_init",
            value: function _init() {
                var _this = this;
                return _async_to_generator(function () {
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                _this._setupDOM();
                                _this._setupThree();
                                return [4, _this._loadAssets()];
                            case 1:
                                _state.sent();
                                return [4, _this._setupHandTracking()];
                            case 2:
                                _state.sent();
                                return [4, _this.videoElement.play()];
                            case 3:
                                _state.sent();
                                window.addEventListener(
                                    "resize",
                                    _this._onResize.bind(_this),
                                );
                                _this._startGame();
                                _this._setupEventListeners();
                                _this._animate();
                                return [2];
                        }
                    });
                })();
            },
        },
        {
            key: "_setupDOM",
            value: function _setupDOM() {
                this.renderDiv.style.position = "relative";
                this.renderDiv.style.width = "100%";
                this.renderDiv.style.height = "100%";
                this.renderDiv.style.overflow = "hidden";
                this.renderDiv.style.background = "#111";
                this.videoElement = document.createElement("video");
                this.videoElement.style.position = "absolute";
                this.videoElement.style.top = "0";
                this.videoElement.style.left = "0";
                this.videoElement.style.width = "100%";
                this.videoElement.style.height = "100%";
                this.videoElement.style.objectFit = "cover";
                this.videoElement.style.transform = "scaleX(-1)";
                this.videoElement.style.filter = "grayscale(100%)";
                this.videoElement.autoplay = true;
                this.videoElement.muted = true;
                this.videoElement.playsInline = true;
                this.videoElement.style.zIndex = "0";
                this.renderDiv.appendChild(this.videoElement);
                this.gameOverContainer = document.createElement("div");
                this.gameOverContainer.style.position = "absolute";
                this.gameOverContainer.style.top = "50%";
                this.gameOverContainer.style.left = "50%";
                this.gameOverContainer.style.transform =
                    "translate(-50%, -50%)";
                this.gameOverContainer.style.zIndex = "10";
                this.gameOverContainer.style.display = "none";
                this.gameOverContainer.style.pointerEvents = "none";
                this.gameOverContainer.style.textAlign = "center";
                this.gameOverContainer.style.color = "white";
                this.gameOverContainer.style.textShadow = "2px 2px 4px black";
                this.gameOverContainer.style.fontFamily =
                    '"Arial Black", Gadget, sans-serif';
                this.gameOverText = document.createElement("div");
                this.gameOverText.innerText = "STATUS";
                this.gameOverText.style.fontSize = "clamp(36px, 10vw, 72px)";
                this.gameOverText.style.fontWeight = "bold";
                this.gameOverText.style.marginBottom = "10px";
                this.gameOverContainer.appendChild(this.gameOverText);
                this.restartHintText = document.createElement("div");
                this.restartHintText.innerText = "(click to restart tracking)";
                this.restartHintText.style.fontSize = "clamp(16px, 3vw, 24px)";
                this.restartHintText.style.fontWeight = "normal";
                this.restartHintText.style.opacity = "0.8";
                this.gameOverContainer.appendChild(this.restartHintText);
                this.renderDiv.appendChild(this.gameOverContainer);
            },
        },
        {
            key: "_setupThree",
            value: function _setupThree() {
                var width = this.renderDiv.clientWidth;
                var height = this.renderDiv.clientHeight;
                this.scene = new THREE.Scene();
                this.camera = new THREE.OrthographicCamera(
                    width / -2,
                    width / 2,
                    height / 2,
                    height / -2,
                    1,
                    1000,
                );
                this.camera.position.z = 100;
                this.renderer = new THREE.WebGLRenderer({
                    alpha: true,
                    antialias: true,
                });
                this.renderer.setSize(width, height);
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.domElement.style.position = "absolute";
                this.renderer.domElement.style.top = "0";
                this.renderer.domElement.style.left = "0";
                this.renderer.domElement.style.zIndex = "1";
                this.renderDiv.appendChild(this.renderer.domElement);
                var ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
                this.scene.add(ambientLight);
                var directionalLight = new THREE.DirectionalLight(
                    0xffffff,
                    0.9,
                );
                directionalLight.position.set(0, 0, 100);
                this.scene.add(directionalLight);
                for (var i = 0; i < 2; i++) {
                    var lineGroup = new THREE.Group();
                    lineGroup.visible = false;
                    this.scene.add(lineGroup);
                    this.hands.push({
                        landmarks: null,
                        anchorPos: new THREE.Vector3(),
                        lineGroup: lineGroup,
                        isFist: false,
                    });
                }
                // Shared materials — instantiated once, reused every frame
                this.handLineMaterial = new THREE.LineBasicMaterial({
                    color: 0x00ccff,
                    linewidth: 8,
                });
                // FIX (issue #3): was previously created inline per frame inside
                // _updateHandLines, leaking a new GPU material object every animation tick.
                this.thumbIndexLineMaterial = new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    linewidth: 3,
                });
                this.fingertipMaterialHand1 = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    side: THREE.DoubleSide,
                });
                this.fingertipMaterialHand2 = new THREE.MeshBasicMaterial({
                    color: 0xffffff,
                    side: THREE.DoubleSide,
                });
                this.handConnections = [
                    [0, 1],
                    [1, 2],
                    [2, 3],
                    [3, 4],
                    [0, 5],
                    [5, 6],
                    [6, 7],
                    [7, 8],
                    [0, 9],
                    [9, 10],
                    [10, 11],
                    [11, 12],
                    [0, 13],
                    [13, 14],
                    [14, 15],
                    [15, 16],
                    [0, 17],
                    [17, 18],
                    [18, 19],
                    [19, 20],
                    [5, 9],
                    [9, 13],
                    [13, 17],
                ];
                this.beatIndicatorGroup = new THREE.Group();
                this.scene.add(this.beatIndicatorGroup);
                this._setupBeatIndicatorMaterials();
                var indicatorSize = 20;
                var indicatorGeometry = new THREE.PlaneGeometry(
                    indicatorSize,
                    indicatorSize,
                );
                for (var i1 = 0; i1 < 16; i1++) {
                    var indicator = new THREE.Mesh(
                        indicatorGeometry,
                        this.beatIndicatorMaterials[i1],
                    );
                    this.beatIndicatorGroup.add(indicator);
                    this.beatIndicators.push(indicator);
                }
                this._positionBeatIndicators();
            },
        },
        {
            key: "_loadAssets",
            value: function _loadAssets() {
                var _this = this;
                return _async_to_generator(function () {
                    var error;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                console.log("Loading assets...");
                                _state.label = 1;
                            case 1:
                                _state.trys.push([1, 3, , 4]);
                                return [4, drumManager.loadSamples()];
                            case 2:
                                _state.sent();
                                console.log(
                                    "No game-specific assets to load for template.",
                                );
                                return [3, 4];
                            case 3:
                                error = _state.sent();
                                console.error("Error loading assets:", error);
                                _this._showError("Failed to load assets.");
                                throw error;
                            case 4:
                                return [2];
                        }
                    });
                })();
            },
        },
        {
            key: "_setupHandTracking",
            value: function _setupHandTracking() {
                var _this = this;
                return _async_to_generator(function () {
                    var vision, stream, error;
                    return _ts_generator(this, function (_state) {
                        switch (_state.label) {
                            case 0:
                                _state.trys.push([0, 4, , 5]);
                                console.log("Setting up Hand Tracking...");
                                return [
                                    4,
                                    FilesetResolver.forVisionTasks(
                                        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",
                                    ),
                                ];
                            case 1:
                                vision = _state.sent();
                                // FIX (issue #4): use createLandmarker() instead of
                                // HandLandmarker.createFromOptions() directly so that GPU
                                // delegate failures are caught and retried with CPU.
                                return [
                                    4,
                                    createLandmarker(vision, {
                                        baseOptions: {
                                            modelAssetPath:
                                                "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
                                            delegate: "GPU",
                                        },
                                        numHands: 2,
                                        runningMode: "VIDEO",
                                    }),
                                ];
                            case 2:
                                _this.handLandmarker = _state.sent();
                                console.log("HandLandmarker created.");
                                console.log("Requesting webcam access...");
                                return [
                                    4,
                                    navigator.mediaDevices.getUserMedia({
                                        video: {
                                            facingMode: "user",
                                            width: { ideal: 1280 },
                                            height: { ideal: 720 },
                                        },
                                        audio: false,
                                    }),
                                ];
                            case 3:
                                stream = _state.sent();
                                _this.videoElement.srcObject = stream;
                                console.log("Webcam stream obtained.");
                                return [
                                    2,
                                    new Promise(function (resolve) {
                                        _this.videoElement.onloadedmetadata =
                                            function () {
                                                console.log(
                                                    "Webcam metadata loaded.",
                                                );
                                                _this.videoElement.style.width =
                                                    _this.renderDiv
                                                        .clientWidth + "px";
                                                _this.videoElement.style.height =
                                                    _this.renderDiv
                                                        .clientHeight + "px";
                                                resolve();
                                            };
                                    }),
                                ];
                            case 4:
                                error = _state.sent();
                                console.error(
                                    "Error setting up Hand Tracking or Webcam:",
                                    error,
                                );
                                _this._showError(
                                    "Webcam/Hand Tracking Error: ".concat(
                                        error.message,
                                        ". Please allow camera access.",
                                    ),
                                );
                                throw error;
                            case 5:
                                return [2];
                        }
                    });
                })();
            },
        },
        {
            key: "_updateHands",
            value: function _updateHands() {
                var _this = this;
                if (
                    !this.handLandmarker ||
                    !this.videoElement.srcObject ||
                    this.videoElement.readyState < 2 ||
                    this.videoElement.videoWidth === 0
                )
                    return;

                if (this.currentMode === "voice") return;

                var videoTime = this.videoElement.currentTime;
                if (videoTime > this.lastVideoTime) {
                    this.lastVideoTime = videoTime;
                    try {
                        var results = this.handLandmarker.detectForVideo(
                            this.videoElement,
                            performance.now(),
                        );
                        var videoParams = this._getVisibleVideoParameters();
                        if (!videoParams) return;
                        var canvasWidth = this.renderDiv.clientWidth;
                        var canvasHeight = this.renderDiv.clientHeight;
                        var scale = [
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
                        var isOneHand = this.currentMode === "onehand";
                        var handsToProcess = isOneHand ? 1 : this.hands.length;

                        if (isOneHand) {
                            var hand1 = this.hands[1];
                            if (hand1.landmarks !== null) {
                                this.musicManager.stopArpeggio(1);
                                drumManager.updateActiveDrums({});
                                hand1.landmarks = null;
                            }
                            if (hand1.lineGroup)
                                hand1.lineGroup.visible = false;
                        }

                        for (var i = 0; i < handsToProcess; i++) {
                            var _this1 = this;
                            var hand = _this1.hands[i];
                            var wasVisible = hand.landmarks !== null;

                            if (results.landmarks && results.landmarks[i]) {
                                var currentRawLandmarks = results.landmarks[i];
                                if (
                                    !_this1.lastLandmarkPositions[i] ||
                                    _this1.lastLandmarkPositions[i].length !==
                                    currentRawLandmarks.length
                                ) {
                                    _this1.lastLandmarkPositions[i] =
                                        currentRawLandmarks.map(function (lm) {
                                            return _object_spread({}, lm);
                                        });
                                }
                                var smoothedLandmarks = currentRawLandmarks.map(
                                    function (lm, lmIndex) {
                                        var prevLm =
                                            _this.lastLandmarkPositions[i][
                                            lmIndex
                                            ];
                                        return {
                                            x:
                                                _this.smoothingFactor * lm.x +
                                                (1 - _this.smoothingFactor) *
                                                prevLm.x,
                                            y:
                                                _this.smoothingFactor * lm.y +
                                                (1 - _this.smoothingFactor) *
                                                prevLm.y,
                                            z:
                                                _this.smoothingFactor * lm.z +
                                                (1 - _this.smoothingFactor) *
                                                prevLm.z,
                                        };
                                    },
                                );
                                _this1.lastLandmarkPositions[i] =
                                    smoothedLandmarks.map(function (lm) {
                                        return _object_spread({}, lm);
                                    });
                                hand.landmarks = smoothedLandmarks;
                                var palm = smoothedLandmarks[9];
                                var lmOriginalX =
                                    palm.x * videoParams.videoNaturalWidth;
                                var lmOriginalY =
                                    palm.y * videoParams.videoNaturalHeight;
                                var normX_visible =
                                    (lmOriginalX - videoParams.offsetX) /
                                    videoParams.visibleWidth;
                                var normY_visible =
                                    (lmOriginalY - videoParams.offsetY) /
                                    videoParams.visibleHeight;
                                var handX =
                                    (1 - normX_visible) * canvasWidth -
                                    canvasWidth / 2;
                                var handY =
                                    (1 - normY_visible) * canvasHeight -
                                    canvasHeight / 2;
                                hand.anchorPos.set(handX, handY, 1);

                                if (i === 0) {
                                    var isFistNow =
                                        _this1._isFist(smoothedLandmarks);
                                    if (isFistNow && !hand.isFist) {
                                        _this1.musicManager.cycleSynth();
                                        _this1.musicManager.stopArpeggio(i);
                                    }
                                    hand.isFist = isFistNow;

                                    var noteIndex = Math.floor(
                                        (1 - normY_visible) * scale.length,
                                    );
                                    var note =
                                        scale[
                                        Math.max(
                                            0,
                                            Math.min(
                                                scale.length - 1,
                                                noteIndex,
                                            ),
                                        )
                                        ];

                                    if (_this1.waveformVisualizer) {
                                        var colorIndex =
                                            noteIndex %
                                            _this1.waveformColors.length;
                                        if (
                                            !_this1.musicManager.isUsingAIPreset
                                        ) {
                                            _this1.waveformVisualizer.updateColor(
                                                _this1.waveformColors[
                                                colorIndex
                                                ],
                                            );
                                        }
                                    }

                                    var thumbTip = smoothedLandmarks[4];
                                    var indexTip = smoothedLandmarks[8];
                                    var dx = thumbTip.x - indexTip.x;
                                    var dy = thumbTip.y - indexTip.y;
                                    var distance = Math.sqrt(dx * dx + dy * dy);
                                    var velocity = Math.max(
                                        0,
                                        Math.min(1.0, distance * 5),
                                    );

                                    if (isOneHand) {
                                        if (isFistNow) {
                                            drumManager.updateActiveDrums({});
                                        } else {
                                            var allFingerStates =
                                                _this1._getFingerStates(
                                                    smoothedLandmarks,
                                                );
                                            var drumFingerStates = {
                                                middle: allFingerStates.middle,
                                                ring: allFingerStates.ring,
                                                pinky: allFingerStates.pinky,
                                            };
                                            drumManager.updateActiveDrums(
                                                drumFingerStates,
                                            );
                                        }
                                    }

                                    _this1._updateHandLines(
                                        i,
                                        smoothedLandmarks,
                                        videoParams,
                                        canvasWidth,
                                        canvasHeight,
                                        {
                                            note: note,
                                            velocity: velocity,
                                            isFist: isFistNow,
                                            fingerStates: isOneHand
                                                ? (function () {
                                                    var s =
                                                        _this1._getFingerStates(
                                                            smoothedLandmarks,
                                                        );
                                                    return {
                                                        middle: s.middle,
                                                        ring: s.ring,
                                                        pinky: s.pinky,
                                                    };
                                                })()
                                                : null,
                                        },
                                    );

                                    if (!isFistNow) {
                                        var arpeggioIsActive =
                                            _this1.musicManager.activePatterns.has(
                                                i,
                                            );
                                        if (!wasVisible || !arpeggioIsActive) {
                                            _this1.musicManager.startArpeggio(
                                                i,
                                                note,
                                            );
                                        } else {
                                            _this1.musicManager.updateArpeggio(
                                                i,
                                                note,
                                            );
                                        }
                                        _this1.musicManager.updateArpeggioVolume(
                                            i,
                                            velocity,
                                        );
                                    } else {
                                        _this1.musicManager.stopArpeggio(i);
                                    }
                                } else if (i === 1) {
                                    var fingerStates =
                                        _this1._getFingerStates(
                                            smoothedLandmarks,
                                        );
                                    drumManager.updateActiveDrums(fingerStates);
                                    _this1._updateHandLines(
                                        i,
                                        smoothedLandmarks,
                                        videoParams,
                                        canvasWidth,
                                        canvasHeight,
                                        { fingerStates: fingerStates },
                                    );
                                }

                                hand.lineGroup.visible = true;
                            } else {
                                if (wasVisible) {
                                    if (i === 0) {
                                        _this1.musicManager.stopArpeggio(i);
                                        if (isOneHand)
                                            drumManager.updateActiveDrums({});
                                    } else if (i === 1) {
                                        drumManager.updateActiveDrums({});
                                    }
                                }
                                hand.landmarks = null;
                                if (hand.lineGroup)
                                    hand.lineGroup.visible = false;
                            }
                        }
                    } catch (error) {
                        console.error("Error during hand detection:", error);
                    }
                }
            },
        },
        {
            key: "_getVisibleVideoParameters",
            value: function _getVisibleVideoParameters() {
                if (
                    !this.videoElement ||
                    this.videoElement.videoWidth === 0 ||
                    this.videoElement.videoHeight === 0
                )
                    return null;
                var vNatW = this.videoElement.videoWidth;
                var vNatH = this.videoElement.videoHeight;
                var rW = this.renderDiv.clientWidth;
                var rH = this.renderDiv.clientHeight;
                if (vNatW === 0 || vNatH === 0 || rW === 0 || rH === 0)
                    return null;
                var videoAR = vNatW / vNatH;
                var renderDivAR = rW / rH;
                var finalVideoPixelX,
                    finalVideoPixelY,
                    visibleVideoPixelWidth,
                    visibleVideoPixelHeight;
                if (videoAR > renderDivAR) {
                    var scale = rH / vNatH;
                    var scaledVideoWidth = vNatW * scale;
                    var totalCroppedPixelsX = (scaledVideoWidth - rW) / scale;
                    finalVideoPixelX = totalCroppedPixelsX / 2;
                    finalVideoPixelY = 0;
                    visibleVideoPixelWidth = vNatW - totalCroppedPixelsX;
                    visibleVideoPixelHeight = vNatH;
                } else {
                    var scale1 = rW / vNatW;
                    var scaledVideoHeight = vNatH * scale1;
                    var totalCroppedPixelsY = (scaledVideoHeight - rH) / scale1;
                    finalVideoPixelX = 0;
                    finalVideoPixelY = totalCroppedPixelsY / 2;
                    visibleVideoPixelWidth = vNatW;
                    visibleVideoPixelHeight = vNatH - totalCroppedPixelsY;
                }
                if (
                    visibleVideoPixelWidth <= 0 ||
                    visibleVideoPixelHeight <= 0
                ) {
                    return {
                        offsetX: 0,
                        offsetY: 0,
                        visibleWidth: vNatW,
                        visibleHeight: vNatH,
                        videoNaturalWidth: vNatW,
                        videoNaturalHeight: vNatH,
                    };
                }
                return {
                    offsetX: finalVideoPixelX,
                    offsetY: finalVideoPixelY,
                    visibleWidth: visibleVideoPixelWidth,
                    visibleHeight: visibleVideoPixelHeight,
                    videoNaturalWidth: vNatW,
                    videoNaturalHeight: vNatH,
                };
            },
        },
        {
            key: "_showStatusScreen",
            value: function _showStatusScreen(message) {
                var color =
                    arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : "white";
                var showRestartHint =
                    arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : false;
                this.gameOverContainer.style.display = "block";
                this.gameOverText.innerText = message;
                this.gameOverText.style.color = color;
                this.restartHintText.style.display = showRestartHint
                    ? "block"
                    : "none";
            },
        },
        {
            key: "_showError",
            value: function _showError(message) {
                this.gameOverContainer.style.display = "block";
                this.gameOverText.innerText = "ERROR: ".concat(message);
                this.gameOverText.style.color = "orange";
                this.restartHintText.style.display = "true";
                this.gameState = "error";
                this.hands.forEach(function (hand) {
                    if (hand.lineGroup) hand.lineGroup.visible = false;
                });
            },
        },
        {
            key: "_startGame",
            value: function _startGame() {
                var _this = this;
                console.log("Starting tracking...");
                this.musicManager.start().then(function () {
                    drumManager.startSequence();
                    var analyser = _this.musicManager.getAnalyser();
                    if (analyser) {
                        _this.waveformVisualizer = new WaveformVisualizer(
                            _this.scene,
                            analyser,
                            _this.renderDiv.clientWidth,
                            _this.renderDiv.clientHeight,
                        );
                    }
                });
                this.gameState = "tracking";
                this.lastVideoTime = -1;
                this.clock.start();
            },
        },
        {
            key: "_restartGame",
            value: function _restartGame() {
                console.log("Restarting tracking...");
                this.gameOverContainer.style.display = "none";
                this.hands.forEach(function (hand) {
                    if (hand.lineGroup) hand.lineGroup.visible = false;
                });
                this.gameState = "tracking";
                this.lastVideoTime = -1;
                this.clock.start();
            },
        },
        {
            key: "_onResize",
            value: function _onResize() {
                var width = this.renderDiv.clientWidth;
                var height = this.renderDiv.clientHeight;
                this.camera.left = width / -2;
                this.camera.right = width / 2;
                this.camera.top = height / 2;
                this.camera.bottom = height / -2;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(width, height);
                this.videoElement.style.width = width + "px";
                this.videoElement.style.height = height + "px";
                this._positionBeatIndicators();
                if (this.waveformVisualizer)
                    this.waveformVisualizer.updatePosition(width, height);
            },
        },
        {
            key: "_positionBeatIndicators",
            value: function _positionBeatIndicators() {
                var width = this.renderDiv.clientWidth;
                var height = this.renderDiv.clientHeight;
                var totalWidth = width * 0.8;
                var spacing = totalWidth / 16;
                var startX = -totalWidth / 2 + spacing / 2;
                var yPos = -height / 2 + 150;
                this.beatIndicators.forEach(function (indicator, i) {
                    indicator.position.set(startX + i * spacing, yPos, 1);
                });
            },
        },
        {
            key: "_setupBeatIndicatorMaterials",
            value: function _setupBeatIndicatorMaterials() {
                for (var i = 0; i < 16; i++) {
                    this.beatIndicatorMaterials[i] =
                        new THREE.MeshBasicMaterial({
                            color: this.beatIndicatorColors.off,
                            transparent: true,
                            opacity: 0.5,
                        });
                }
            },
        },
        {
            key: "_createTextSprite",
            value: function _createTextSprite(message, parameters) {
                parameters = parameters || {};
                var fontface = parameters.fontface || "Arial";
                var fontsize = parameters.fontsize || 24;
                var backgroundColor = parameters.backgroundColor || {
                    r: 255,
                    g: 255,
                    b: 255,
                    a: 0.8,
                };
                var textColor = parameters.textColor || {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1.0,
                };
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                context.font = "Bold ".concat(fontsize, "px ").concat(fontface);
                var metrics = context.measureText(message);
                var textWidth = metrics.width;
                var padding = 10;
                var canvasWidth = textWidth + padding * 2;
                var canvasHeight = fontsize * 1.4 + padding;
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                context.font = "Bold ".concat(fontsize, "px ").concat(fontface);
                context.fillStyle = "rgba("
                    .concat(backgroundColor.r, ",")
                    .concat(backgroundColor.g, ",")
                    .concat(backgroundColor.b, ",")
                    .concat(backgroundColor.a, ")");
                context.fillRect(0, 0, canvasWidth, canvasHeight);
                context.fillStyle = "rgba("
                    .concat(textColor.r, ", ")
                    .concat(textColor.g, ", ")
                    .concat(textColor.b, ", 1.0)");
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillText(message, canvasWidth / 2, canvasHeight / 2);
                var texture = new THREE.CanvasTexture(canvas);
                texture.needsUpdate = true;
                var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
                var sprite = new THREE.Sprite(spriteMaterial);
                sprite.scale.set(canvas.width, canvas.height, 1.0);
                return sprite;
            },
        },
        {
            key: "_getFingerStates",
            value: function _getFingerStates(landmarks) {
                var fingertips = { index: 8, middle: 12, ring: 16, pinky: 20 };
                var fingerJointsBelowTip = {
                    index: 6,
                    middle: 10,
                    ring: 14,
                    pinky: 18,
                };
                var states = {};
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator =
                            Object.entries(fingertips)[Symbol.iterator](),
                        _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next())
                            .done);
                        _iteratorNormalCompletion = true
                    ) {
                        var _step_value = _sliced_to_array(_step.value, 2);
                        var finger = _step_value[0];
                        var tipIndex = _step_value[1];
                        var jointIndex = fingerJointsBelowTip[finger];
                        if (landmarks[tipIndex] && landmarks[jointIndex]) {
                            states[finger] =
                                landmarks[tipIndex].y < landmarks[jointIndex].y;
                        } else {
                            states[finger] = false;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (
                            !_iteratorNormalCompletion &&
                            _iterator.return != null
                        )
                            _iterator.return();
                    } finally {
                        if (_didIteratorError) throw _iteratorError;
                    }
                }
                return states;
            },
        },
        {
            key: "_isFist",
            value: function _isFist(landmarks) {
                if (!landmarks || landmarks.length < 21) return false;
                var palmCenter = landmarks[9];
                var fingertipsIndices = [4, 8, 12, 16, 20];
                var fistThreshold = 0.1;
                var _iteratorNormalCompletion = true,
                    _didIteratorError = false,
                    _iteratorError = undefined;
                try {
                    for (
                        var _iterator = fingertipsIndices[Symbol.iterator](),
                        _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next())
                            .done);
                        _iteratorNormalCompletion = true
                    ) {
                        var tipIndex = _step.value;
                        var tip = landmarks[tipIndex];
                        var dx = tip.x - palmCenter.x;
                        var dy = tip.y - palmCenter.y;
                        var distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance > fistThreshold) return false;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (
                            !_iteratorNormalCompletion &&
                            _iterator.return != null
                        )
                            _iterator.return();
                    } finally {
                        if (_didIteratorError) throw _iteratorError;
                    }
                }
                return true;
            },
        },
        {
            key: "_updateHandLines",
            value: function _updateHandLines(
                handIndex,
                landmarks,
                videoParams,
                canvasWidth,
                canvasHeight,
                controlData,
            ) {
                var _this = this;
                var hand = this.hands[handIndex];
                var lineGroup = hand.lineGroup;

                // FIX (issue #3): skip dispose() on shared materials so they aren't
                // invalidated the first time a child using them is removed. only dispose
                // materials that were created locally (i.e. sprites and per-frame meshes).
                var sharedMaterials = new Set([
                    this.handLineMaterial,
                    this.thumbIndexLineMaterial,
                    this.fingertipMaterialHand1,
                    this.fingertipMaterialHand2,
                ]);

                while (lineGroup.children.length) {
                    var child = lineGroup.children[0];
                    lineGroup.remove(child);
                    if (child.geometry) child.geometry.dispose();
                    if (
                        child.material &&
                        !sharedMaterials.has(child.material)
                    ) {
                        if (child.material.map) child.material.map.dispose();
                        child.material.dispose();
                    }
                }

                if (!landmarks || landmarks.length === 0 || !videoParams) {
                    lineGroup.visible = false;
                    return;
                }
                var points3D = landmarks.map(function (lm) {
                    var lmOriginalX = lm.x * videoParams.videoNaturalWidth;
                    var lmOriginalY = lm.y * videoParams.videoNaturalHeight;
                    var normX_visible =
                        (lmOriginalX - videoParams.offsetX) /
                        videoParams.visibleWidth;
                    var normY_visible =
                        (lmOriginalY - videoParams.offsetY) /
                        videoParams.visibleHeight;
                    normX_visible = Math.max(0, Math.min(1, normX_visible));
                    normY_visible = Math.max(0, Math.min(1, normY_visible));
                    var x = (1 - normX_visible) * canvasWidth - canvasWidth / 2;
                    var y =
                        (1 - normY_visible) * canvasHeight - canvasHeight / 2;
                    return new THREE.Vector3(x, y, 1.1);
                });
                var lineZ = 1;
                this.handConnections.forEach(function (conn) {
                    var p1 = points3D[conn[0]];
                    var p2 = points3D[conn[1]];
                    if (p1 && p2) {
                        var geometry = new THREE.BufferGeometry().setFromPoints(
                            [p1.clone().setZ(lineZ), p2.clone().setZ(lineZ)],
                        );
                        lineGroup.add(
                            new THREE.Line(geometry, _this.handLineMaterial),
                        );
                    }
                });
                var fingertipRadius = 8,
                    wristRadius = 12,
                    circleSegments = 16;
                this.fingertipLandmarkIndices.forEach(function (index) {
                    var landmarkPosition = points3D[index];
                    if (landmarkPosition) {
                        var radius =
                            index === 0 ? wristRadius : fingertipRadius;
                        var circleGeometry = new THREE.CircleGeometry(
                            radius,
                            circleSegments,
                        );
                        var material =
                            handIndex === 0
                                ? _this.fingertipMaterialHand1
                                : _this.fingertipMaterialHand2;
                        var landmarkCircle = new THREE.Mesh(
                            circleGeometry,
                            material,
                        );
                        landmarkCircle.position.copy(landmarkPosition);
                        lineGroup.add(landmarkCircle);
                    }
                });
                var thumbPos = points3D[4];
                var indexPos = points3D[8];
                var wristPos = points3D[0];
                var isOneHand = this.currentMode === "onehand";

                if (wristPos) {
                    if (handIndex === 0 && thumbPos && indexPos) {
                        var lineGeom = new THREE.BufferGeometry().setFromPoints(
                            [thumbPos, indexPos],
                        );
                        // FIX (issue #3): reuse the shared thumbIndexLineMaterial instead
                        // of allocating a new LineBasicMaterial every animation frame.
                        lineGroup.add(
                            new THREE.Line(
                                lineGeom,
                                this.thumbIndexLineMaterial,
                            ),
                        );

                        var note = controlData.note,
                            velocity = controlData.velocity,
                            isFist = controlData.isFist;
                        if (isFist) {
                            var labelText = this.musicManager.isUsingAIPreset
                                ? "AI SYNTH"
                                : "SYNTH ".concat(
                                    this.musicManager.currentSynthIndex + 1,
                                );
                            var fistLabel = this._createTextSprite(labelText, {
                                fontsize: 22,
                                backgroundColor: this.labelColors.evaPurple,
                                textColor: this.labelColors.evaGreen,
                            });
                            fistLabel.position.set(
                                wristPos.x,
                                wristPos.y + 60,
                                2,
                            );
                            lineGroup.add(fistLabel);
                        } else {
                            var midPoint = new THREE.Vector3().lerpVectors(
                                thumbPos,
                                indexPos,
                                0.5,
                            );
                            var volumeLabel = this._createTextSprite(
                                "Volume: ".concat(velocity.toFixed(2)),
                                {
                                    fontsize: 18,
                                    backgroundColor: this.labelColors.evaOrange,
                                    textColor: this.labelColors.white,
                                },
                            );
                            volumeLabel.position.set(midPoint.x, midPoint.y, 2);
                            lineGroup.add(volumeLabel);
                            var pitchLabel = this._createTextSprite(
                                "Pitch: ".concat(note),
                                {
                                    fontsize: 18,
                                    backgroundColor: this.labelColors.evaGreen,
                                    textColor: this.labelColors.black,
                                },
                            );
                            pitchLabel.position.set(
                                wristPos.x,
                                wristPos.y + 60,
                                2,
                            );
                            lineGroup.add(pitchLabel);

                            if (isOneHand && controlData.fingerStates) {
                                var activeDrums = ["middle", "ring", "pinky"]
                                    .filter(function (f) {
                                        return controlData.fingerStates[f];
                                    })
                                    .map(function (f) {
                                        return drumManager.getFingerToDrumMap()[
                                            f
                                        ];
                                    })
                                    .filter(Boolean)
                                    .join(", ");
                                var drumLabel = this._createTextSprite(
                                    "Drums: ".concat(activeDrums || "None"),
                                    {
                                        fontsize: 18,
                                        backgroundColor:
                                            this.labelColors.evaRed,
                                        textColor: this.labelColors.white,
                                    },
                                );
                                drumLabel.position.set(
                                    wristPos.x,
                                    wristPos.y + 90,
                                    2,
                                );
                                lineGroup.add(drumLabel);
                            }
                        }
                    } else if (handIndex === 1) {
                        var fingerStates = controlData.fingerStates;
                        var activeDrums = Object.entries(fingerStates)
                            .filter(function (param) {
                                var _p = _sliced_to_array(param, 2);
                                return _p[1];
                            })
                            .map(function (param) {
                                var _p = _sliced_to_array(param, 2);
                                return (
                                    drumManager.getFingerToDrumMap()[_p[0]] ||
                                    "none"
                                );
                            })
                            .join(", ");

                        var drumLabel = this._createTextSprite(
                            "Drums: ".concat(activeDrums || "None"),
                            {
                                fontsize: 18,
                                backgroundColor: this.labelColors.evaRed,
                                textColor: this.labelColors.white,
                            },
                        );
                        drumLabel.position.set(wristPos.x, wristPos.y + 60, 2);
                        lineGroup.add(drumLabel);
                    }
                }
                lineGroup.visible = true;
            },
        },
        {
            key: "_animate",
            value: function _animate() {
                requestAnimationFrame(this._animate.bind(this));
                if (this.gameState === "tracking") {
                    this.clock.getDelta();
                    this._updateHands();
                    this._updateBeatIndicator();
                    if (this.waveformVisualizer)
                        this.waveformVisualizer.update();
                }
                this.renderer.render(this.scene, this.camera);
            },
        },
        {
            key: "_updateBeatIndicator",
            value: function _updateBeatIndicator() {
                var _this = this;
                var currentBeat = drumManager.getCurrentBeat();
                var progress = Tone.Transport.progress;
                var beatProgress = (progress * 16) % 1;
                var pulse = 1.5 + 0.5 * Math.cos(beatProgress * Math.PI * 2);
                var activeDrums = drumManager.getActiveDrums();
                var drumPattern = drumManager.getDrumPattern();
                var drumPriority = [
                    "kick",
                    "snare",
                    "clap",
                    "hihat",
                    "bass_synth",
                    "bass_drop",
                    "bell",
                    "cymbal",
                    "piano",
                ];

                this.beatIndicators.forEach(function (indicator, i) {
                    var stepColor = _this.beatIndicatorColors.off;
                    var isHit = false;
                    var _iteratorNormalCompletion = true,
                        _didIteratorError = false,
                        _iteratorError = undefined;
                    try {
                        for (
                            var _iterator = drumPriority[Symbol.iterator](),
                            _step;
                            !(_iteratorNormalCompletion = (_step =
                                _iterator.next()).done);
                            _iteratorNormalCompletion = true
                        ) {
                            var drum = _step.value;
                            if (activeDrums.has(drum) && drumPattern[drum][i]) {
                                stepColor = _this.beatIndicatorColors[drum];
                                isHit = true;
                                break;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (
                                !_iteratorNormalCompletion &&
                                _iterator.return != null
                            )
                                _iterator.return();
                        } finally {
                            if (_didIteratorError) throw _iteratorError;
                        }
                    }
                    indicator.material.color.set(stepColor);
                    indicator.material.opacity = isHit ? 0.9 : 0.5;
                    if (i === currentBeat) {
                        indicator.scale.set(pulse, pulse, 1);
                    } else {
                        indicator.scale.set(1, 1, 1);
                    }
                });
            },
        },
        {
            key: "_setupEventListeners",
            value: function _setupEventListeners() {
                var _this = this;
                this.renderDiv.addEventListener("click", function () {
                    _this.musicManager.start();
                    if (_this.gameState === "error") _this._restartGame();
                });

                var fingerIds = ["f-index", "f-middle", "f-ring", "f-pinky"];
                fingerIds.forEach(function (id) {
                    var selectElement = document.getElementById(id);
                    if (selectElement) {
                        selectElement.addEventListener(
                            "change",
                            function (event) {
                                var fingerName = id.replace("f-", "");
                                drumManager.updateFingerMapping(
                                    fingerName,
                                    event.target.value,
                                );
                            },
                        );
                    }
                });

                const micBtn = document.getElementById("mic-toggle");
                const micStatus = document.getElementById("mic-status");
                let isMicActive = false;

                if (micBtn) {
                    micBtn.onclick = async () => {
                        isMicActive = !isMicActive;
                        if (!_this.musicManager.isStarted)
                            await _this.musicManager.start();
                        _this.musicManager.toggleMic(isMicActive);
                        if (isMicActive) {
                            micBtn.innerText = "STOP MICROPHONE";
                            micBtn.style.background = "var(--eva-green)";
                            micBtn.style.color = "#0a0a0f";
                            if (micStatus)
                                micStatus.innerText = "MIC: RECEIVING";
                        } else {
                            micBtn.innerText = "START MICROPHONE";
                            micBtn.style.background = "rgba(255,255,255,0.05)";
                            micBtn.style.color = "var(--text-primary)";
                            if (micStatus) micStatus.innerText = "MIC: OFF";
                        }
                    };
                }

                var aiBtn = document.getElementById("ai-generate-btn");
                var aiInput = document.getElementById("ai-vibe-input");
                if (aiBtn && aiInput) {
                    aiBtn.addEventListener("click", async function () {
                        var vibe = aiInput.value.trim().slice(0, 200).replace(/[`"\\]/g, '');
                        if (!vibe) return;
                        var originalText = aiBtn.innerText;
                        aiBtn.innerText = "GENERATING...";
                        aiBtn.style.opacity = "0.7";
                        aiBtn.disabled = true;
                        try {
                            var response = await fetch(
                                "https://epidaurus-production.up.railway.app/api/generate-synth",
                                {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({ vibe }),
                                },
                            );
                            if (!response.ok) throw new Error("Server error");
                            var data = await response.json();
                            _this.musicManager.applyAIPreset(data.preset);
                            if (_this.waveformVisualizer && data.color) {
                                _this.waveformVisualizer.updateColor(
                                    new THREE.Color(data.color),
                                );
                            }
                            console.log(
                                "Successfully generated vibe: " + vibe,
                                data,
                            );
                        } catch (err) {
                            console.error("AI Generation failed:", err);
                            alert(
                                "Failed to generate synth. Make sure the backend server is running.",
                            );
                        } finally {
                            aiBtn.innerText = "GENERATE PRESET";
                            aiBtn.style.opacity = "1";
                            aiBtn.disabled = false;
                        }
                    });
                }

                var recordBtn = document.getElementById("record-btn");
                var isRecording = false;
                if (recordBtn) {
                    recordBtn.addEventListener("click", function () {
                        if (!isRecording) {
                            _this.musicManager.startRecording();
                            recordBtn.innerText = "■ STOP & DOWNLOAD";
                            recordBtn.style.background = "#ffffff";
                            recordBtn.style.color = "#000000";
                            isRecording = true;
                        } else {
                            _this.musicManager.stopRecording();
                            recordBtn.innerText = "● START RECORDING";
                            recordBtn.style.background = "var(--eva-red)";
                            recordBtn.style.color = "white";
                            isRecording = false;
                        }
                    });
                }

                console.log("Game event listeners set up.");
            },
        },
        {
            key: "setMode",
            value: async function setMode(mode) {
                var prevMode = this.currentMode;
                this.currentMode = mode;
                console.log("Mode switched to:", mode);

                if (prevMode === "voice" && mode !== "voice") {
                    if (this.voiceManager) this.voiceManager.stop();
                    this.musicManager.toggleMic(false);
                    const micBtn = document.getElementById("mic-toggle");
                    const micStatus = document.getElementById("mic-status");
                    if (micBtn) {
                        micBtn.innerText = "START MICROPHONE";
                        micBtn.style.background = "rgba(255,255,255,0.05)";
                        micBtn.style.color = "var(--text-primary)";
                    }
                    if (micStatus) micStatus.innerText = "MIC: OFF";

                    const voicePanel =
                        document.getElementById("voice-mode-panel");
                    if (voicePanel) voicePanel.style.display = "none";
                }

                if (mode === "onehand") {
                    const hand1 = this.hands[1];
                    if (hand1) {
                        this.musicManager.stopArpeggio(1);
                        drumManager.updateActiveDrums({});
                        hand1.landmarks = null;
                        if (hand1.lineGroup) hand1.lineGroup.visible = false;
                    }
                }

                if (prevMode === "onehand" && mode === "default") {
                    drumManager.updateActiveDrums({});
                }

                if (mode === "voice") {
                    if (!this.musicManager.isStarted)
                        await this.musicManager.start();

                    this.musicManager.toggleMic(true);
                    const micBtn = document.getElementById("mic-toggle");
                    const micStatus = document.getElementById("mic-status");
                    if (micBtn) {
                        micBtn.innerText = "STOP MICROPHONE";
                        micBtn.style.background = "var(--eva-green)";
                        micBtn.style.color = "#0a0a0f";
                    }
                    if (micStatus) micStatus.innerText = "MIC: RECEIVING";

                    const voicePanel =
                        document.getElementById("voice-mode-panel");
                    if (voicePanel) voicePanel.style.display = "block";

                    if (!this.voiceManager) {
                        this.voiceManager = new VoiceManager(
                            drumManager,
                            this.musicManager,
                            this,
                            (status) => {
                                const el =
                                    document.getElementById("voice-status");
                                if (el) el.textContent = status;
                            },
                            (label) => {
                                const el = document.getElementById(
                                    "voice-command-flash",
                                );
                                if (el) {
                                    el.textContent = label;
                                    el.classList.add("flash-active");
                                    setTimeout(
                                        () =>
                                            el.classList.remove("flash-active"),
                                        700,
                                    );
                                }
                            },
                        );
                    }
                    this.voiceManager.start();
                }
            },
        },
        {
            key: "startMic",
            value: async function startMic() {
                this.micStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });
                if (!this.micMonitorEl) {
                    this.micMonitorEl = document.createElement("audio");
                    this.micMonitorEl.autoplay = true;
                    this.micMonitorEl.muted = false;
                    this.micMonitorEl.volume = 0.2;
                    document.body.appendChild(this.micMonitorEl);
                }
                this.micMonitorEl.srcObject = this.micStream;
                await this.micMonitorEl.play();
                const audioCtx = new (
                    window.AudioContext || window.webkitAudioContext
                )();
                const source = audioCtx.createMediaStreamSource(this.micStream);
                this.micAnalyser = audioCtx.createAnalyser();
                this.micAnalyser.fftSize = 512;
                this.micData = new Uint8Array(
                    this.micAnalyser.frequencyBinCount,
                );
                source.connect(this.micAnalyser);
                this.isMicOn = true;
                this.updateMicLevel();
            },
        },
        {
            key: "stopMic",
            value: function stopMic() {
                if (this.micStream)
                    this.micStream.getTracks().forEach((t) => t.stop());
                this.isMicOn = false;
                if (this.micRAF) cancelAnimationFrame(this.micRAF);
                if (this.micMonitorEl) {
                    this.micMonitorEl.pause();
                    this.micMonitorEl.srcObject = null;
                    this.micMonitorEl.remove();
                    this.micMonitorEl = null;
                }
            },
        },
        {
            key: "updateMicLevel",
            value: function updateMicLevel() {
                if (!this.isMicOn) return;
                const micStatus = document.getElementById("mic-status");
                this.micAnalyser.getByteFrequencyData(this.micData);
                let sum = 0;
                for (let i = 0; i < this.micData.length; i++)
                    sum += this.micData[i];
                const avg = sum / this.micData.length;
                if (avg > 10) {
                    micStatus.textContent = "Mic: receiving";
                } else {
                    micStatus.textContent = "Mic: listening";
                }
                this.micRAF = requestAnimationFrame(
                    this.updateMicLevel.bind(this),
                );
            },
        },
    ]);
    return Game;
})();
