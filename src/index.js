import * as Tone from 'tone';
import {Scale, Note} from "@tonaljs/tonal";

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
    key.style.background = "gray";
    setTimeout(() => {
      if (key.classList.contains("w")) {
        key.style.background = "white";
      } else {
        key.style.background = "black";
      }
    }, 300);
  });
}
window.addEventListener("keypress", (e) => {
  if (e.key in keys) {
    synth.triggerAttackRelease(keys[e.key], "8n");
    let key = document.getElementById(keys[e.key]);
    key.style.background = "gray";
    setTimeout(() => {
      if (key.classList.contains("w")) {
        key.style.background = "white";
      } else {
        key.style.background = "black";
      }
    }, 300);
  }
});

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
    trigger(document.getElementById(a),2000);
    setTimeout(() => trigger(document.getElementById(b),1500), 500);
    setTimeout(() => trigger(document.getElementById(c),1000), 1000);
    synth.triggerRelease([a,b,c],now + 2);
  };
  return { chord };
};

const buttonFactory = (btnId, chord) => {
    const button = document.getElementById(btnId);
    button.addEventListener("click", () => chord());
    return button;
}

const majorChords = (() => {
  const majorC = chordFactory("C4", "E4", "G4").chord;
  const majorCs = chordFactory("C#4", "F4", "G#4").chord;
  const majorD = chordFactory("D4", "F#4", "A4").chord;
  const majorDs = chordFactory("D#4", "G4", "A#4").chord;
  const majorE = chordFactory("E4", "G#4", "B4").chord;
  const majorF = chordFactory("F4", "A4", "C5").chord;
  const majorFs = chordFactory("F#4", "A#4", "C#5").chord
  const majorG = chordFactory("G4", "B4", "D5").chord;
  const majorGs = chordFactory("G#4", "C5", "D#5").chord;
  const majorA = chordFactory("A4", "C#5", "E5").chord;
  const majorAs = chordFactory("A#4", "D5", "F5").chord;
  const majorB = chordFactory("B4", "D#5", "F#5").chord;

  return { majorC, majorCs, majorD, majorDs, majorE, majorF, majorFs, majorG, majorGs, majorA, majorAs, majorB };
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
  return { majorC, majorCs, majorD, majorDs, majorE, majorF, majorFs, majorG, majorGs, majorA, majorAs, majorB };
})();

const minorChords = (() => {
  const minorC = chordFactory("C4", "D#4", "G4").chord;
  const minorCs = chordFactory("C#4", "E4", "G#4").chord;
  const minorD = chordFactory("D4", "F4", "A4").chord;
  const minorDs = chordFactory("D#4", "F#4", "A#4").chord;
  const minorE = chordFactory("E4", "G4", "B4").chord;
  const minorF = chordFactory("F4", "G#4", "C5").chord;
  const minorFs = chordFactory("F#4", "A4", "C#5").chord
  const minorG = chordFactory("G4", "A#4", "D5").chord;
  const minorGs = chordFactory("G#4", "B4", "D#5").chord;
  const minorA = chordFactory("A4", "C5", "E5").chord;
  const minorAs = chordFactory("A#4", "C#5", "F5").chord;
  const minorB = chordFactory("B4", "D5", "F#5").chord;
  return { minorC, minorCs, minorD, minorDs, minorE, minorF, minorFs, minorG, minorGs, minorA, minorAs, minorB };
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
  return { minorC, minorCs, minorD, minorDs, minorE, minorF, minorFs, minorG, minorGs, minorA, minorAs, minorB };
})();

const scales = {
    tonic: '',
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
    chromatic: ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B'],
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
        pattern: (type) => {
            const notes = Scale.get(`${scales.tonic}4 ${type}`)['notes'];
            notes.push(`${scales.tonic}5`);
            const pattern = new Tone.Pattern((time, note) => {
                note = scales.enharmonic(note);
                trigger(document.getElementById(note),500);
                synth.triggerAttackRelease(note,.25);
            }, notes );
            pattern.start();
            pattern.iterations = 8; 
        },
        prompt: () => {
                while (true) {
                let options = scales.chromatic.join(', ');
                 scales.tonic = prompt(`${options}\nWhat is the tonic?`);
                 if (scales.chromatic.includes(scales.tonic)) {
                    break;
                 } else {
                     alert("Pick a note belonging to the chromatic scale");
                     continue;
                 }
                }
            
        },
        Major: (() => {
            scales.prompt();
            scales.hepatonicScales.pattern("major");
        }),
        Minor: (() => {

        }),
        Harmonic: (() => {

        }),
        Melodic: (() => {

        }),
        Dorian: (() => {

        }),
        Arabian: (() => {

        })
    },
    pentatonicScales: {
        pattern: (type) => {
            const notes = Scale.get(`${scales.tonic}4 ${type}`)['notes'];
            notes.push(`${scales.tonic}5`);
            const pattern = new Tone.Pattern((time, note) => {
                note = scales.enharmonic(note);
                trigger(document.getElementById(note),500);
                synth.triggerAttackRelease(note,.25);
            }, notes );
            pattern.start();
            pattern.iterations = 6; 
        },
        prompt: () => {
            while (true) {
                let options = scales.chromatic.join(', ');
                 scales.tonic = prompt(`${options}\nWhat is the tonic?`);
                 if (scales.chromatic.includes(scales.tonic)) {
                    break;
                 } else {
                     alert("Pick a note belonging to the chromatic scale");
                     continue;
                 }
                }
        },
        
        Major: (() => {
            scales.pentatonicScales.prompt();
            scales.pentatonicScales.pattern("pentatonic");
        }),
        Minor: (() => {
            scales.pentatonicScales.prompt();
            scales.pentatonicScales.pattern("minor pentatonic");
        }),
        Egyptian: (() => {
            scales.pentatonicScales.prompt();
            scales.pentatonicScales.pattern("egyptian")
        }),
        Indian: (() => {
            scales.pentatonicScales.prompt();
            scales.pentatonicScales.pattern("mixolydian pentatonic")
        }),
        Ritusen:(() => {
            scales.pentatonicScales.prompt();
            scales.pentatonicScales.pattern("ritusen")
        }),
        Ionian:(() => {
            scales.pentatonicScales.prompt();
            scales.pentatonicScales.pattern("ionian pentatonic");
        })
        
    },
}
const buttons = {
    hepatonic: {
        majorBtn: (() => {
            const btn = document.getElementById("majorH");
            btn.addEventListener("click", () => {
                Tone.Transport.start();
                scales.hepatonicScales.Major();
            })
        })(),
        minorBtn: (() => {

        })(),
        harmonicMinorBtn: (() => {

        })(),
        melodicMinorBtn: (() => {

        })(),
        dorian: (() => {

        })(),
        arabian: (() => {

        })
    },
    pentatonic: {
        majorBtn: (() => {
            const btn = document.getElementById('majorP');
            btn.addEventListener("click", () => {
                Tone.Transport.start();
                scales.pentatonicScales.Major();
            })
        })(),
        minorBtn: (() => {
            const btn = document.getElementById('minorP');
            btn.addEventListener("click", () => {
                Tone.Transport.start();
                scales.pentatonicScales.Minor();
            })
        })(),
        egyptian: (() => {
            const btn = document.getElementById('egyptian');
            btn.addEventListener("click", () => {
                Tone.Transport.start();
                scales.pentatonicScales.Egyptian();
            })
        })(),
        indian: (() => {
            const btn = document.getElementById('indian');
            btn.addEventListener("click", () => {
                Tone.Transport.start();
                scales.pentatonicScales.Indian();
            })
        })(),
        ritusen: (() => {
            const btn = document.getElementById('ritusen');
            btn.addEventListener("click", () => {
                Tone.Transport.start();
                scales.pentatonicScales.Ritusen();
            })
        })(),
        ionian: (() => {
            const btn = document.getElementById("ionian");
            btn.addEventListener("click", () => {
                Tone.Transport.start();
                scales.pentatonicScales.Ionian();
            })
        })()
    }
}
