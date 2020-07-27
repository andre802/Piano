import * as Tone from 'tone';
const synth = new Tone.Synth().toDestination();
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
const chordFactory = (a, b, c) => {
  const chord = () => {
    trigger(document.getElementById(a));
    setTimeout(() => trigger(document.getElementById(b)), 500);
    setTimeout(() => trigger(document.getElementById(c)), 1000);
    const now = Tone.now();
    synth.triggerAttack(a, now);
    synth.triggerAttack(b, now + 0.5);
    synth.triggerAttack(c, now + 1);
    synth.triggerRelease(now + 2);
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
  const majorD = chordFactory("D4", "F#4", "A4").chord;
  const majorE = chordFactory("E4", "G#4", "B4").chord;
  const majorF = chordFactory("F4", "A4", "C5").chord;
  const majorG = chordFactory("G4", "B4", "D5").chord;
  const majorA = chordFactory("A4", "C#5", "E5").chord;
  const majorB = chordFactory("B4", "D#5", "F#5").chord;

  return { majorC, majorD, majorE, majorF, majorG, majorA, majorB };
})();


const majorChordButtons = (() => {
    const majorC = buttonFactory("majorC", majorChords.majorC);
    const majorD = buttonFactory("majorD", majorChords.majorD);
    const majorE = buttonFactory("majorE", majorChords.majorE);
    const majorF = buttonFactory("majorF", majorChords.majorF);
    const majorG = buttonFactory("majorG", majorChords.majorG);
    const majorA = buttonFactory("majorA", majorChords.majorA);
    const majorB = buttonFactory("majorB", majorChords.majorB);
  return { majorC, majorD, majorE, majorF, majorG, majorA, majorB };
})();

const minorChords = (() => {
  const minorC = chordFactory("C4", "D#4", "G4").chord;
  const minorD = chordFactory("D4", "F4", "A4").chord;
  const minorE = chordFactory("E4", "G4", "B4").chord;
  const minorF = chordFactory("F4", "G#4", "C5").chord;
  const minorG = chordFactory("G4", "A#4", "D5").chord;
  const minorA = chordFactory("A4", "C5", "E5").chord;
  const minorB = chordFactory("B4", "D5", "F#5").chord;
  return { minorC, minorD, minorE, minorF, minorG, minorA, minorB };
})();

const minorChordButtons = (() => {
    const minorC = buttonFactory("minorC", minorChords.minorC);
    const minorD = buttonFactory("minorD", minorChords.minorD);
    const minorE = buttonFactory("minorE", minorChords.minorE);
    const minorF = buttonFactory("minorF", minorChords.minorF);
    const minorG = buttonFactory("minorG", minorChords.minorG);
    const minorA = buttonFactory("minorA", minorChords.minorA);
    const minorB = buttonFactory("minorB", minorChords.minorB);
  return { minorC, minorD, minorE, minorF, minorG, minorA, minorB };
})();
