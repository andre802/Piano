import * as Tone from 'tone';
import {
    Scale,
    Note
} from "@tonaljs/tonal"
import {
    synth,
    trigger,
    enharmonic,
    buttonFactory,
    chromatic
} from "./index"
import {
    chordProgressions,
    sevenths
} from './chords'
const scales = {
    tonic: '',
    pattern: (type, iterations) => {
        const notes = Scale.get(`${scales.tonic}4 ${type}`)['notes'];
        notes.push(`${scales.tonic}5`);
        const pattern = new Tone.Pattern((time, note) => {
            note = enharmonic(note);
            trigger(document.getElementById(note), 500);
            synth.triggerAttackRelease(note, .25);
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
const buttons = {
    hepatonic: (() => {
        buttonFactory("majorH", scales.hepatonicScales.Major);
        buttonFactory("minorH", scales.hepatonicScales.Minor);
        buttonFactory("hMinorH", scales.hepatonicScales.Harmonic);
        buttonFactory("melodicMinorH", scales.hepatonicScales.Melodic);
        buttonFactory("dorian", scales.hepatonicScales.Dorian);
        buttonFactory("phrygian", scales.hepatonicScales.Phrygian);
        buttonFactory("lydian", scales.hepatonicScales.Lydian);
        buttonFactory("locrian", scales.hepatonicScales.Locrian);
        buttonFactory("mixolydian", scales.hepatonicScales.Mixolydian);
        buttonFactory("arabian", scales.hepatonicScales.Arabian);
    })(),
    pentatonic: (() => {
        buttonFactory("majorP", scales.pentatonicScales.Major);
        buttonFactory("minorP", scales.pentatonicScales.Minor);
        buttonFactory("egyptian", scales.pentatonicScales.Egyptian);
        buttonFactory("indian", scales.pentatonicScales.Indian);
        buttonFactory("ritusen", scales.pentatonicScales.Ritusen);
        buttonFactory("ionian", scales.pentatonicScales.Ionian)
    })(),
    octatonic: (() => {
        buttonFactory("bebop", scales.octatonicScales.Bebop);
        buttonFactory("bebopMajor", scales.octatonicScales.BebopMajor);
        buttonFactory("bebopMinor", scales.octatonicScales.BebopMinor);
        buttonFactory("purviRaga", scales.octatonicScales.PurviRaga);
        buttonFactory("ichikosucho", scales.octatonicScales.Ichikosucho);
        buttonFactory("kafiRaga", scales.octatonicScales.KafiRagi);
    })(),
    chromatic: (() => {
        buttonFactory("chromatic", scales.chromaticScales.Chromatic);
    })(),
    progressions: (() => {
        buttonFactory("circle", chordProgressions.progressions.Circle);
        buttonFactory("50s", chordProgressions.progressions.Fiftys);
        buttonFactory("251", chordProgressions.progressions.TwoFiveOne);
        buttonFactory("1564", chordProgressions.progressions.OneFiveSixFour);
    })(),
    sevenths: (() => {
        buttonFactory("dominant7th", sevenths.chords.Dominant);
        buttonFactory("major7th", sevenths.chords.Major);
        buttonFactory("minor7th", sevenths.chords.Minor);
        buttonFactory("halfDim7th", sevenths.chords.HalfDim);
        buttonFactory("dim7th", sevenths.chords.Dim);
    })()
}
export {
    scales
}