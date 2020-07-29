import * as Tone from 'tone';
import {
    Scale,
    Note,
    Chord
} from "@tonaljs/tonal";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const octave = document.getElementsByClassName("octave")[0];
const keys = {
    a: "C4",
    w: "C#4",
    s: "D4",
    e: "D#4",
    d: "E4",
    f: "F4",
    t: "F#4",
    g: "G4",
    y: "G#4",
    h: "A4",
    u: "A#4",
    j: "B4",
    k: "C5",
    o: "C#5",
    l: "D5",
    p: "D#5",
    z: "E5",
    x: "F5",
    D: "F#5",
    c: "G5",
    F: "G#5",
    v: "A5",
    G: "A#5",
    b: "B5",
    n: "C6"
};
for (let i = 0; i < octave.children.length; i++) {
    octave.children[i].addEventListener("click", (e) => {
        synth.triggerAttackRelease(e.srcElement.id, "8n");
        let key = document.getElementById(e.srcElement.id);
        trigger(key, 300)
    })
}
window.addEventListener("keypress", (e) => {
    if (e.key in keys) {
        synth.triggerAttackRelease(keys[e.key], "8n");
        let key = document.getElementById(keys[e.key]);
        trigger(key, 300);
    }
});
/*
window.addEventListener("keyup", (e) => {
    if(e.key in keys) {
        synth.triggerRelease(keys[e.key])
    }
})
*/
const trigger = (...el) => {
    let e = el[0];
    e.style.background = "gray";
    setTimeout(() => {
        if (e.classList.contains("w")) {
            e.style.background = "white";
        } else {
            e.style.background = "black";
        }
    }, el[el.length - 1]);

};
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

const buttonFactory = (btnId, chord) => {
    const button = document.getElementById(btnId);
    button.addEventListener("click", () => chord());
}
const enharmonic = (note) => {
    const toChange = ['b', 'E#', '##', 'B#'];
    toChange.forEach((value) => {
        if (note.includes(value)) {
            note = Note.enharmonic(note);
            return note;
        }
    })
    return note;
}
const scales = {
    tonic: '',
    pattern: (type, iterations) => {
        const notes = Scale.get(`${scales.tonic}4 ${type}`)['notes'];
        notes.push(`${scales.tonic}5`);
        const pattern = new Tone.Pattern((time, note) => {
            note = scales.enharmonic(note);
            trigger(document.getElementById(note), 500);
            synth.triggerAttackRelease(note, .25);
        }, notes);
        pattern.iterations = iterations;
        pattern.start();
        Tone.Transport.start();
    },
    prompt: () => {
        while (true) {
            let options = scales.chromatic.join(', ');
            scales.tonic = prompt(`${options}\nWhat is the tonic?`);
            if (scales.chromatic.includes(scales.tonic)) {
                break;
            } else {
                alert("Pick a note belonging to the chromatic scale");
                break;
            }
        }
    },
    chromatic: ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'],
    // Changes few troubles case (in toChange array) to their enharmonic for smoother operations
    enharmonic: (note) => {
        const toChange = ['b', 'E#', '##', 'B#'];
        toChange.forEach((value) => {
            if (note.includes(value)) {
                note = Note.enharmonic(note);
                return note;
            }
        })
        return note;
    },
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


const majorChordButtons = (() => {
    const majorC = buttonFactory("majorC", majorChords.majorC);
    const majorCs = buttonFactory("majorCs", majorChords.majorCs);
    const majorD = buttonFactory("majorD", majorChords.majorD);
    const majorDs = buttonFactory("majorDs", majorChords.majorDs);
    const majorE = buttonFactory("majorE", majorChords.majorE);
    const majorF = buttonFactory("majorF", majorChords.majorF);
    const majorFs = buttonFactory("majorFs", majorChords.majorFs);
    const majorG = buttonFactory("majorG", majorChords.majorG);
    const majorGs = buttonFactory("majorGs", majorChords.majorGs);
    const majorA = buttonFactory("majorA", majorChords.majorA);
    const majorAs = buttonFactory("majorAs", majorChords.majorAs);
    const majorB = buttonFactory("majorB", majorChords.majorB);
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

const minorChordButtons = (() => {
    const minorC = buttonFactory("minorC", minorChords.minorC);
    const minorCs = buttonFactory("minorCs", minorChords.minorCs);
    const minorD = buttonFactory("minorD", minorChords.minorD);
    const minorDs = buttonFactory("minorDs", minorChords.minorDs);
    const minorE = buttonFactory("minorE", minorChords.minorE);
    const minorF = buttonFactory("minorF", minorChords.minorF);
    const minorFs = buttonFactory("minorFs", minorChords.minorFs);
    const minorG = buttonFactory("minorG", minorChords.minorG);
    const minorGs = buttonFactory("minorGs", minorChords.minorGs);
    const minorA = buttonFactory("minorA", minorChords.minorA);
    const minorAs = buttonFactory("minorAs", minorChords.minorAs);
    const minorB = buttonFactory("minorB", minorChords.minorB);
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


const buttons = {
    hepatonic: (() => {
        buttonFactory("majorH", scales.hepatonicScales.Major);
        buttonFactory("minorH", scales.hepatonicScales.Minor);
        buttonFactory("hMinorH", scales.hepatonicScales.Harmonic);
        buttonFactory("melodicMinorH", scales.hepatonicScales.Melodic);
        buttonFactory("dorian", scales.hepatonicScales.Dorian);
        buttonFactory("arabian", scales.hepatonicScales.Arabian);
    })(),
    pentatonic: (() => {
        buttonFactory("majorP", scales.pentatonicScales.Major);
        buttonFactory("minorP", scales.pentatonicScales.Minor);
        buttonFactory("egyptian", scales.pentatonicScales.Egyptian);
        buttonFactory("indian", scales.pentatonicScales.Indian);
        buttonFactory("ritusen", scales.pentatonicScales.Ritusen);
        buttonFactory("ionian", scales.pentatonicScales.Ionian)
    })()
}