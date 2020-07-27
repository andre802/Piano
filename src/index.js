import * as Tone from 'tone';
const synth = new Tone.Synth().toDestination();
const octave = document.getElementsByClassName("octave")[0];
const octaveChildren = octave.children;
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
  b: "B5"
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
    const synth = new Tone.Synth().toDestination();
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
  el.forEach((e) => {
    e.style.background = "gray";
    setTimeout(() => {
      if (e.classList.contains("w")) {
        e.style.background = "white";
      } else {
        e.style.background = "black";
      }
    }, 1500);
  });
};
const chordFact = (a, b, c) => {
  const chord = () => {
    trigger(document.getElementById(a));
    setTimeout(() => trigger(document.getElementById(b)), 500);
    setTimeout(() => trigger(document.getElementById(c)), 1000);
    const now = Tone.now();
    synth.triggerAttack(a, now);
    synth.triggerAttack(b, now + 0.5);
    synth.triggerAttack(c, now + 1);
    synth.triggerRelease([a, b, c], now + 2);
  };
  return { chord };
};
const majorChords = (() => {
  const majorC = chordFact("C4", "E4", "G4").chord;

  const majorD = () => {
    const now = Tone.now();
    const d4 = document.getElementById("D4");
    const fs4 = document.getElementById("F#4");
    const a4 = document.getElementById("A4");
    trigger(d4);
    setTimeout(() => trigger(fs4), 500);
    setTimeout(() => trigger(a4), 1000);
    synth.triggerAttack("D4", now);
    synth.triggerAttack("F#4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    synth.triggerRelease(["D4", "F#4", "A4"], now + 2);
  };
  const majorE = () => {
    const now = Tone.now();
    const e4 = document.getElementById("E4");
    const gs4 = document.getElementById("G#4");
    const b4 = document.getElementById("B4");
    trigger(e4);
    setTimeout(() => trigger(gs4), 500);
    setTimeout(() => trigger(b4), 1000);
    synth.triggerAttack("E4", now);
    synth.triggerAttack("G#4", now + 0.5);
    synth.triggerAttack("B4", now + 1);
    synth.triggerRelease(["E4", "G#4", "B4"], now + 2);
  };
  const majorF = () => {
    const now = Tone.now();
    const f4 = document.getElementById("F4");
    const a4 = document.getElementById("A4");
    const c5 = document.getElementById("C5");
    trigger(f4);
    setTimeout(() => trigger(a4), 500);
    setTimeout(() => trigger(c5), 1000);
    synth.triggerAttack("F4", now);
    synth.triggerAttack("A4", now + 0.5);
    synth.triggerAttack("C5", now + 1);
    synth.triggerRelease(["F4", "A4", "C5"], now + 2);
  };
  const majorG = () => {
    const now = Tone.now();
    const g4 = document.getElementById("G4");
    const b4 = document.getElementById("B4");
    const d5 = document.getElementById("D5");
    trigger(g4);
    setTimeout(() => trigger(b4), 500);
    setTimeout(() => trigger(d5), 1000);
    synth.triggerAttack("G4", now);
    synth.triggerAttack("B4", now + 0.5);
    synth.triggerAttack("D5", now + 1);
    synth.triggerRelease(["G4", "B4", "D5"], now + 2);
  };
  const majorA = () => {
    const now = Tone.now();
    const a4 = document.getElementById("A4");
    const cs5 = document.getElementById("C#5");
    const e5 = document.getElementById("E5");
    trigger(a4);
    setTimeout(() => trigger(cs5), 500);
    setTimeout(() => trigger(e5), 1000);
    synth.triggerAttack("A4", now);
    synth.triggerAttack("C#5", now + 0.5);
    synth.triggerAttack("E5", now + 1);
    synth.triggerRelease(["A4", "C#5", "E5"], now + 2);
  };
  const majorB = () => {
    const now = Tone.now();
    const b4 = document.getElementById("B4");
    const ds5 = document.getElementById("D#5");
    const fs5 = document.getElementById("F#5");
    trigger(b4);
    setTimeout(() => trigger(ds5), 500);
    setTimeout(() => trigger(fs5), 1000);
    synth.triggerAttack("B4", now);
    synth.triggerAttack("D#5", now + 0.5);
    synth.triggerAttack("F#5", now + 1);
    synth.triggerRelease(["B4", "D#5", "F#5"], now + 2);
  };

  return { majorC, majorD, majorE, majorF, majorG, majorA, majorB };
})();
const majorChordButtons = (() => {
      const majorD = document.getElementById("majorD");
    const majorC = document.getElementById("majorC");
    const majorE = document.getElementById("majorE");
    const majorF =  document.getElementById("majorF");
    const majorG =  document.getElementById("majorG");
    const majorA =  document.getElementById("majorA");
    const majorB =  document.getElementById("majorB");
  majorC.addEventListener("click", () => majorChords.majorC());
  majorD.addEventListener("click", () => majorChords.majorD());
  majorE.addEventListener("click", () => majorChords.majorE());
  majorF.addEventListener("click", () => majorChords.majorF());
  majorG.addEventListener("click", () => majorChords.majorG());
  majorA.addEventListener("click", () => majorChords.majorA());
  majorB.addEventListener("click", () => majorChords.majorB());
  return { majorC, majorD, majorE, majorF, majorG, majorA, majorB };
})();

const minorChords = (() => {
  const minorC = () => {
    const c4 = document.getElementById("C4");
    const eb4 = document.getElementById("D#4");
    const g4 = document.getElementById("G4");
    trigger(c4);
    setTimeout(() => trigger(eb4), 500);
    setTimeout(() => trigger(g4), 1000);
    const now = Tone.now();
    synth.triggerAttack("C4", now);
    synth.triggerAttack("Eb4", now + 0.5);
    synth.triggerAttack("G4", now + 1);
    synth.triggerRelease(["C4", "Eb4", "G4"], now + 2);
  };
  const minorD = () => {
    const d4 = document.getElementById("D4");
    const f4 = document.getElementById("F4");
    const a4 = document.getElementById("A4");
    trigger(d4);
    setTimeout(() => trigger(f4), 500);
    setTimeout(() => trigger(a4), 1000);
    const now = Tone.now();
    synth.triggerAttack("D4", now);
    synth.triggerAttack("F4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    // RIGHT MODEL
    synth.triggerRelease(now + 2);
  };
  const minorE = () => {
    const e4 = document.getElementById("E4");
    const g4 = document.getElementById("G4");
    const b4 = document.getElementById("B4");
    trigger(e4);
    setTimeout(() => trigger(g4), 500);
    setTimeout(() => trigger(b4), 1000);
    const now = Tone.now();
    synth.triggerAttack("E4", now);
    synth.triggerAttack("G4", now + 0.5);
    synth.triggerAttack("B4", now + 1);
    synth.triggerRelease(["E4", "G4", "B4"], now + 2);
  };
  const minorF = () => {
    const f4 = document.getElementById("F4");
    const ab4 = document.getElementById("G#4");
    const c5 = document.getElementById("C5");
    trigger(f4);
    setTimeout(() => trigger(ab4), 500);
    setTimeout(() => trigger(c5), 1000);
    const now = Tone.now();
    synth.triggerAttack("F4", now);
    synth.triggerAttack("Ab4", now + 0.5);
    synth.triggerAttack("C5", now + 1);
    synth.triggerRelease(["F4", "Ab4", "C5"], now + 2);
  };
  const minorG = () => {
    const g4 = document.getElementById("G4");
    const bb4 = document.getElementById("A#4");
    const d5 = document.getElementById("D5");
    trigger(g4);
    setTimeout(() => trigger(bb4), 500);
    setTimeout(() => trigger(d5), 1000);
    const now = Tone.now();
    synth.triggerAttack("G4", now);
    synth.triggerAttack("Bb4", now + 0.5);
    synth.triggerAttack("D5", now + 1);
    synth.triggerRelease(["G4", "Bb4", "D5"], now + 2);
  };
  const minorA = () => {
    const a4 = document.getElementById("A4");
    const c5 = document.getElementById("C5");
    const e5 = document.getElementById("E5");
    trigger(a4);
    setTimeout(() => trigger(c5), 500);
    setTimeout(() => trigger(e5), 1000);
    const now = Tone.now();
    synth.triggerAttack("A4", now);
    synth.triggerAttack("C5", now + 0.5);
    synth.triggerAttack("E5", now + 1);
    synth.triggerRelease(["A4", "C5", "E5"], now + 2);
  };
  const minorB = () => {
    const b4 = document.getElementById("B4");
    const d5 = document.getElementById("D5");
    const fs5 = document.getElementById("F#5");
    trigger(b4);
    setTimeout(() => trigger(d5), 500);
    setTimeout(() => trigger(fs5), 1000);
    const now = Tone.now();
    synth.triggerAttack("B4", now);
    synth.triggerAttack("D5", now + 0.5);
    synth.triggerAttack("F#5", now + 1);
    synth.triggerRelease(["B4", "D5", "F#5"], now + 2);
  };
  return { minorC, minorD, minorE, minorF, minorG, minorA, minorB };
})();
const minorChordButtons = (() => {
  const minorC = document.getElementById("minorC");
  minorC.addEventListener("click", () => minorChords.minorC());

  const minorD = document.getElementById("minorD");
  minorD.addEventListener("click", () => minorChords.minorD());

  const minorE = document.getElementById("minorE");
  minorE.addEventListener("click", () => minorChords.minorE());

  const minorF = document.getElementById("minorF");
  minorF.addEventListener("click", () => minorChords.minorF());

  const minorG = document.getElementById("minorG");
  minorG.addEventListener("click", () => minorChords.minorG());

  const minorA = document.getElementById("minorA");
  minorA.addEventListener("click", () => minorChords.minorA());

  const minorB = document.getElementById("minorB");
  minorB.addEventListener("click", () => minorChords.minorB());
  return { minorC, minorD, minorE, minorF, minorG, minorA, minorB };
})();
