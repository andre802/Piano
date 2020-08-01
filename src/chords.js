import * as Tone from 'tone';
import {
    Chord
} from "@tonaljs/tonal"
import {
    synth,
    trigger,
    enharmonic,
    chromatic
} from './index'


const chordFactory = (a, b, c) => {
    const chord = () => {
        const now = Tone.now();
        synth.triggerAttack(a, now);
        synth.triggerAttack(b, now + 0.5);
        synth.triggerAttack(c, now + 1);
        trigger(document.getElementById(a), 2000);
        setTimeout(() => trigger(document.getElementById(b), 1500), 500);
        setTimeout(() => trigger(document.getElementById(c), 1000), 1000);
        synth.triggerRelease([a, b, c], now + 2);
    };
    return {
        chord
    };
};
const chordProgressions = {
    play: (chord, time) => {
        const notes = chord.notes;
        if (time == undefined) {
            time = 0;
        }
        const now = Tone.now();
        notes.map((note) => enharmonic(note)).forEach((note) => {
            trigger(document.getElementById(note), 2000)
        });
        synth.triggerAttack(notes, time);
        synth.triggerRelease(notes, now + 2);

    },
    scale: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    tonic: '',
    /*   pattern: (numerals) => {
           numerals.forEach((num) => {
               console.log(Chord.getChord(RomanNumeral.get('num').chordType));

           })
       }, */
    progressions: {
        Circle: () => {
            // implement being able to change the tonic
            const chords = ['C4 major', 'F4 major', 'B4 dim', 'E4m', 'A4m', 'D4m', 'G4 major', 'C4 major']
            for (let i = 0; i < chords.length; i++) {

                setTimeout(() => chordProgressions.play(Chord.get(chords[i])), 2000 * i);
            }

        },
        Fiftys: () => {
            const romans = ['I', 'vi', 'IV', 'V'];
            const chords = ['C4 major', 'A4 minor', 'F4 major', 'G4 major'];
            for (let i = 0; i < chords.length; i++) {
                setTimeout(() => chordProgressions.play(Chord.get(chords[i])), 2000 * i);
            }
        },
        TwoFiveOne: () => {
            const chords = ['D4 minor', 'G4 major', 'C4 major'];
            for (let i = 0; i < chords.length; i++) {
                setTimeout(() => chordProgressions.play(Chord.get(chords[i])), 2000 * i);
            }
        },
        OneFiveSixFour: () => {
            const chords = ['C4 major', 'G4 major', 'A4 minor', 'F4 major'];
            for (let i = 0; i < chords.length; i++) {
                setTimeout(() => chordProgressions.play(Chord.get(chords[i])), 2000 * i);
            }
        }
    }
}

const majorChords = (() => {

    const chromatic = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
    const chords = [];
    chromatic.forEach((root) => {
        chords.push(Chord.getChord("major", root)["notes"].map((el) => enharmonic(el)));
    })

    const majorC = chordFactory(...chords[0]).chord;
    const majorCs = chordFactory(...chords[1]).chord;
    const majorD = chordFactory(...chords[2]).chord;
    const majorDs = chordFactory(...chords[3]).chord;
    const majorE = chordFactory(...chords[4]).chord;
    const majorF = chordFactory(...chords[5]).chord;
    const majorFs = chordFactory(...chords[6]).chord
    const majorG = chordFactory(...chords[7]).chord;
    const majorGs = chordFactory(...chords[8]).chord;
    const majorA = chordFactory(...chords[9]).chord;
    const majorAs = chordFactory(...chords[10]).chord;
    const majorB = chordFactory(...chords[11]).chord;

    return {
        majorC,
        majorCs,
        majorD,
        majorDs,
        majorE,
        majorF,
        majorFs,
        majorG,
        majorGs,
        majorA,
        majorAs,
        majorB
    };
})();



const minorChords = (() => {
    const chromatic = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
    const chords = [];
    chromatic.forEach((root) => {
        chords.push(Chord.getChord("minor", root)["notes"].map((el) => enharmonic(el)));

    })
    const minorC = chordFactory(...chords[0]).chord;
    const minorCs = chordFactory(...chords[1]).chord;
    const minorD = chordFactory(...chords[2]).chord;
    const minorDs = chordFactory(...chords[3]).chord;
    const minorE = chordFactory(...chords[4]).chord;
    const minorF = chordFactory(...chords[5]).chord;
    const minorFs = chordFactory(...chords[6]).chord
    const minorG = chordFactory(...chords[7]).chord;
    const minorGs = chordFactory(...chords[8]).chord;
    const minorA = chordFactory(...chords[9]).chord;
    const minorAs = chordFactory(...chords[10]).chord;
    const minorB = chordFactory(...chords[11]).chord;
    return {
        minorC,
        minorCs,
        minorD,
        minorDs,
        minorE,
        minorF,
        minorFs,
        minorG,
        minorGs,
        minorA,
        minorAs,
        minorB
    };
})();
const sevenths = {
    play: (chord, time) => {
        if (time == undefined) {
            time = 0;
        }
        const notes = chord.notes;
        const now = Tone.now();
        notes.map((note) => enharmonic(note)).forEach((note) => {
            trigger(document.getElementById(note), 2000)
        });
        synth.triggerAttack(notes, time);
        synth.triggerRelease(notes, now + 2);

    },
    tonic: '',
    prompt: () => {
        while (true) {
            let options = chromatic.join(', ');
            sevenths.tonic = prompt(`${options}\nWhat is the first note of the chord?`).toUpperCase();
            if (chromatic.includes(sevenths.tonic)) {
                Tone.start();
                sevenths.tonic += '4';
                break;
            } else {
                alert("Pick a note belonging to the chromatic scale");
                break;
            }
        }
    },
    chords: {
        Dominant: () => {
            sevenths.prompt();
            sevenths.play(Chord.get(sevenths.tonic + "dom"));
        },
        Major: () => {
            sevenths.prompt();
            sevenths.play(Chord.get(sevenths.tonic + "maj7"));
        },
        Minor: () => {
            sevenths.prompt();
            sevenths.play(Chord.get(sevenths.tonic + "min7"));
        },
        HalfDim: () => {
            sevenths.prompt();
            sevenths.play(Chord.get(sevenths.tonic + "half-diminished"));
        },
        Dim: () => {
            sevenths.prompt();
            sevenths.play(Chord.get(sevenths.tonic + "diminished"));

        }
    }
}

export {
    chordProgressions,
    sevenths,
    minorChords,
    majorChords

}