import * as Tone from 'tone';
import {
    Note,
} from "@tonaljs/tonal";

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const octave = document.getElementsByClassName("octave")[0];
const chromatic = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
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
    // not working consistently with chord progressions
    e.style.background = "#DBD4D2";
    setTimeout(() => {
        if (e.classList.contains("w")) {
            e.style.background = "linear-gradient(#E8F1F2, #FFFFFD)"
        } else {
            e.style.background = "black";
        }
    }, el[el.length - 1] - 100);

};
// Calling Note enharmonic if note contains special case
const enharmonic = (note) => {
    const toChange = ['b', 'E#', '##', 'B#'];
    toChange.forEach((value) => {
        if (note.indexOf(value) != -1) {
            note = Note.enharmonic(note);
            return note;
        }
    })
    return note;
}
const buttonFactory = (btnId, chord) => {
    const button = document.getElementById(btnId);
    button.addEventListener("click", () => chord());
}

export {
    synth,
    trigger,
    enharmonic,
    buttonFactory,
    chromatic
};