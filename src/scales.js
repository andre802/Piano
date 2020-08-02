import * as Tone from 'tone';
import {
    Scale,
} from "@tonaljs/tonal"
import {
    synth,
    trigger,
    enharmonic,
    chromatic,
    display
} from "./index"
const scales = {
    tonic: '',
    pattern: (type, iterations) => {
        let notes = Scale.get(`${scales.tonic}4 ${type}`)['notes'];
        notes.push(`${scales.tonic}5`);
        notes = notes.map((note) => enharmonic(note));
        display.innerText = notes.join(', ');
        const pattern = new Tone.Pattern((time, note) => {
            trigger(document.getElementById(note), 500);
            synth.triggerAttackRelease(note, .25, time);
        }, notes);
        pattern.iterations = iterations;
        pattern.start();
        Tone.Transport.start();
    },
    prompt: () => {
        while (true) {
            scales.tonic = prompt(`${chromatic.join(', ')}\nWhat is the tonic?`).toUpperCase();
            if (chromatic.includes(scales.tonic)) {
                Tone.start();
                break;
            } else {
                alert("Pick a note belonging to the chromatic scale");
                break;
            }
        }
    },
    // Changes few troubles case (in toChange array) to their enharmonic for smoother operations

    hepatonicScales: {
        Major: () => {
            scales.prompt();
            scales.pattern("major", 8);
        },
        Minor: () => {
            scales.prompt();
            scales.pattern("minor", 8);
        },
        Harmonic: () => {
            scales.prompt();
            scales.pattern("harmonic minor", 8);
        },
        Melodic: () => {
            scales.prompt();
            scales.pattern("melodic minor", 8);
        },
        Dorian: () => {
            scales.prompt();
            scales.pattern("dorian", 8);
        },
        Phrygian: () => {
            scales.prompt();
            scales.pattern("phrygian", 8);
        },
        Lydian: () => {
            scales.prompt();
            scales.pattern("lydian", 8);
        },
        Locrian: () => {
            scales.prompt();
            scales.pattern("locrian", 8);
        },
        Mixolydian: () => {
            scales.prompt();
            scales.pattern("mixolydian", 8)
        },
        Arabian: () => {
            scales.prompt();
            scales.pattern("arabian", 8);
        }
    },
    pentatonicScales: {
        Major: () => {
            scales.prompt();
            scales.pattern("pentatonic", 6);
        },
        Minor: () => {
            scales.prompt();
            scales.pattern("minor pentatonic", 6);
        },
        Egyptian: () => {
            scales.prompt();
            scales.pattern("egyptian", 6)
        },
        Indian: () => {
            scales.prompt();
            scales.pattern("mixolydian pentatonic", 6)
        },
        Ritusen: () => {
            scales.prompt();
            scales.pattern("ritusen", 6)
        },
        Ionian: () => {
            scales.prompt();
            scales.pattern("ionian pentatonic", 6);
        }
    },
    octatonicScales: {
        Bebop: () => {
            scales.prompt();
            scales.pattern("bebop", 9)
        },
        BebopMajor: () => {
            scales.prompt();
            scales.pattern("bebop major", 9)
        },
        BebopMinor: () => {
            scales.prompt();
            scales.pattern("bebop minor", 9);
        },
        PurviRaga: () => {
            scales.prompt();
            scales.pattern("purvi raga", 9);
        },
        Ichikosucho: () => {
            scales.prompt();
            scales.pattern("ichikosucho", 9);
        },
        KafiRagi: () => {
            scales.prompt();
            scales.pattern("kafi raga", 9)
        }
    },
    chromaticScales: {
        Chromatic: () => {
            scales.prompt();
            scales.pattern("chromatic", 13);
        }
    }
}

export {
    scales
}