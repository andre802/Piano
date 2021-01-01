import './style.css';
import * as Tone from 'tone';
import {
    Note,
} from "@tonaljs/tonal";
const html = "<ul class='octave'><li title='a' id='C4' class='w c'></li><li title='w' id='C#4' class='b cs'></li>    <li title='s' id='D4' class='w d'></li>    <li title='e' id='D#4' class='b ds'></li><li title='d' id='E4' class='w e'></li><li title='f' id='F4' class='w f'></li>    <li title='t' id='F#4' class='b fs'></li>    <li title='g' id='G4' class='w g'></li>    <li title='y' id='G#4' class='b gs'></li>    <li title='h' id='A4' class='w a'></li>    <li title='u' id='A#4' class='b as'></li>    <li title='j' id='B4' class='w bn'></li>    <li title='k' id='C5' class='w c'></li>    <section>      <li title='o' id='C#5' class='b cs'></li>      <li title='l' id='D5' class='w d'></li>      <li title='p' id='D#5' class='b ds'></li>      <li title='z' id='E5' class='w e'></li>      <li title='x' id='F5' class='w f'></li>      <li title='D' id='F#5' class='b fs'></li>      <li title='c' id='G5' class='w g'></li>    <li title='F' id='G#5' class='b gs'></li>      <li title='v' id='A5' class='w a'></li>      <li title='G' id='A#5' class='b as'></li>      <li title='b' id='B5' class='w bn'></li>      <li title='n' id='C6' class='w c'></li>    </section>  </ul>  <div id='display'>  </div>  <div class='chords'>    <div class='majorChords'>      <span title='A chord that has a root, major third, and a perfect fifth.'>Major Chords</span>      <div class='buttons'>        <span class='naturals'>          <button id='majorC'>C Major</button>          <button id='majorD'>D Major</button>          <button id='majorE'>E Major</button>          <button id='majorF'>F Major</button>          <button id='majorG'>G Major</button>          <button id='majorA'>A Major</button>          <button id='majorB'>B Major</button>        </span>        <span class='sharpsFlats'>          <button id='majorCs'>C#/Db Major</button>          <button id='majorDs'>D#/Eb Major</button>          <button id='majorFs'>F#/Gb Major</button>          <button id='majorGs'>G#/Ab Major</button>          <button id='majorAs'>A#/Bb Major</button>        </span>      </div>    </div>    <div class='minorChords'>      <span title='A chord that has a root, a minor third and a perfect fifth.'>Minor Chords</span>      <div class='buttons'>        <span class='naturals'>          <button id='minorC'>C Minor</button>          <button id='minorD'>D Minor</button>          <button id='minorE'>E Minor</button>          <button id='minorF'>F Minor</button>          <button id='minorG'>G Minor</button>          <button id='minorA'>A Minor</button>          <button id='minorB'>B Minor</button>        </span>        <span class='sharpsFlats'>          <button id='minorCs'>C#/Db Minor</button>          <button id='minorDs'>D#/Eb Minor</button>        <button id='minorFs'>F#/Gb Minor</button>          <button id='minorGs'>G#/Ab Minor</button>          <button id='minorAs'>A#/Bb Minor</button>        </span>      </div>    </div>    <div class='pentatonicScales'>      <span title='5 Note Scales'>Pentatonic Scales</span>      <div class='buttons'>        <button id='majorP'>Major</button>        <button id='minorP'>Minor</button>        <button id='egyptian'>Egyptian</button>        <button id='indian'>Indian</button>        <button id='ritusen'>Ritusen</button>        <button id='ionian'>Ionian</button>      </div>    </div>    <div class='hepatonicScales'>      <span title='7 Note Scales'>Hepatonic Scales</span>      <div class='buttons'>        <button id='majorH'>Major/Ionian</button>        <button id='minorH'>Minor/Aeolian</button>        <button id='hMinorH'>Harmonic Minor</button>        <button id='melodicMinorH'>Melodic Minor</button>        <button id='dorian'>Dorian</button>        <button id='phrygian'>Phrygian</button>        <button id='lydian'>Lydian</button>        <button id='locrian'>Locrian</button>        <button id='mixolydian'>Mixolydian</button>        <button id='arabian'>Arabian</button>      </div>    </div>    <div class='octatonicScales'>      <span title='8 Note Scales'>Octatonic Scales</span>      <div class='buttons'>        <button id='bebop'>Bebop</button>        <button id='bebopMajor'>Bebop Major</button>        <button id='bebopMinor'>Bebop Minor</button>        <button id='purviRaga'>Purvi Raga</button>        <button id='ichikosucho'>Ichikosucho</button>        <button id='kafiRaga'>Kafi Raga</button>      </div>    </div>    <div class='chromaticScale'>      <span title='12 Note Scale'>Chromatic</span>      <div class='buttons'>        <button id='chromatic'>Chromatic</button>      </div>    </div>    <div class='progressions'>      <span title=''>Chord Progressions</span>      <div class='buttons'>    <button id='circle'>Circle</button>        <button id='50s'>I-vi-IV-V</button>        <button id='251'>ii-V-I</button>        <button id='1564'>I-V-vi-IV</button>      </div>    </div>    <div class='sevenths'>      <span title=''>Seventh Chords</span>      <div class='buttons'>        <button id='dominant7th'>Dominant</button>        <button id='major7th'>Major</button>        <button id='minor7th'>Minor</button>        <button id='halfDim7th'>Half-Diminished</button>        <button id='dim7th'>Diminished</button>      </div>    </div>  </div>";
document.getElementsByTagName('body')[0].innerHTML += (html);
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
        note: "C6",
        triggered: false
    },
};
for (let i = 0; i < pianoKeys.length; i++) {
    let span = document.createElement("span");
    span.innerText = pianoKeys[i].title;
    pianoKeys[i].append(span);

    pianoKeys[i].addEventListener("click", (e) => {
        synth.triggerAttackRelease(e.target.id, "8n");
        let key = document.getElementById(e.target.id);
        display.innerText = e.target.id;
        let length = e.target.id.length;
        setTimeout(() => {
            let text = display.innerText.substring(0, display.innerText.length - length);
            display.innerText = text;
        }, 1000)
        trigger(key, 300)
    });
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