import * as Tone from 'tone';
import {
    Note,
} from "@tonaljs/tonal";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const pianoKeys = document.getElementsByTagName("li");
const display = document.getElementById('display');
const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const keys = {
    a: {
        note: "C4",
        triggered: false
    },
    w: {
        note: "C#4",
        triggered: false
    },
    s: {
        note: "D4",
        triggered: false
    },
    e: {
        note: "D#4",
        triggered: false
    },
    d: {
        note: "E4",
        triggered: false
    },
    f: {
        note: "F4",
        triggered: false
    },
    t: {
        note: "F#4",
        triggered: false
    },
    g: {
        note: "G4",
        triggered: false
    },
    y: {
        note: "G#4",
        triggered: false
    },
    h: {
        note: "A4",
        triggered: false
    },
    u: {
        note: "A#4",
        triggered: false
    },
    j: {
        note: "B4",
        triggered: false
    },
    k: {
        note: "C5",
        triggered: false
    },
    o: {
        note: "C#5",
        triggered: false
    },
    l: {
        note: "D5",
        triggered: false
    },
    p: {
        note: "D#5",
        triggered: false
    },
    z: {
        note: "E5",
        triggered: false
    },
    x: {
        note: "F5",
        triggered: false
    },
    D: {
        note: "F#5",
        triggered: false
    },
    c: {
        note: "G5",
        triggered: false
    },
    F: {
        note: "G#5",
        triggered: false
    },
    v: {
        note: "A5",
        triggered: false
    },
    G: {
        note: "A#5",
        triggered: false
    },
    b: {
        note: "B5",
        triggered: false
    },
    n: {
        note: "G5",
        triggered: false
    },
};
for (let i = 0; i < pianoKeys.length; i++) {
    pianoKeys[i].addEventListener("click", (e) => {
        synth.triggerAttackRelease(e.target.id, "8n");
        let key = document.getElementById(e.target.id);
        display.innerText = e.target.id;
        setTimeout(() => {
            let text = display.innerText.substring(0, display.innerText.length - 3);
            display.innerText = text;
        }, 1000)
        trigger(key, 300)
    })
}

window.addEventListener("keydown", (e) => {
    if (e.key in keys) {
        if (keys[e.key]["triggered"] == false) {
            let key = document.getElementById(keys[e.key]["note"]);
            synth.triggerAttack(keys[e.key]["note"], Tone.now());
            display.innerText += ' ' + keys[e.key]["note"];
            trigger(key);
            keys[e.key]["triggered"] = true;
        }
    }
});

window.addEventListener("keyup", (e) => {
    if (e.key in keys) {
        synth.triggerRelease(keys[e.key]["note"], Tone.now());
        let key = document.getElementById(keys[e.key]["note"]);
        setTimeout(() => {
            let text = display.innerText.substring(3);
            display.innerText = text;
        }, 1500);
        keys[e.key]["triggered"] = false;
        trigger(key);

    }
})
/*
window.addEventListener("keyup", (e) => {
    if(e.key in keys) {
        synth.triggerRelease(keys[e.key])
    }
})
*/
/*  Handles changing the color of the keys to representing
 * being either activated by the user directly or through buttons
 * intended to play chords, scales, etc. 
 * First and only required argument is a HTMLObject of the key either
 * pressed or clicked by the user. Second argument details length of note and
 * thus length of background change. Method either sets background to variable or
 * to an empty string to follow stylesheet rules.
 */
const trigger = (...el) => {
    const pressedBlack = "#DBD4D2";
    const pressedWhite = "maroon";
    let e = el[0];
    // not working consistently with chord progressions
    if (el.length == 1) {
        if (e.style.background == '') {
            if (e.classList.contains('w')) {
                e.style.background = pressedWhite;
            } else {
                e.style.background = pressedBlack;
            }
        } else {
            e.style.background = '';
        }
    } else {
        if (e.classList.contains('w')) {
            e.style.background = pressedWhite;
        } else {
            e.style.background = pressedBlack;
        }
        setTimeout(() => {
            e.style.background = '';
        }, el[el.length - 1] - 100);
    }

};
// Calling Note.enharmonic if note contains special case for more ease with Tone package
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

export {
    synth,
    trigger,
    enharmonic,
    chromatic,
    display
};