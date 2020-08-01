import {
    buttonFactory
} from './index'
import {
    scales
} from './scales'
import {
    chordProgressions,
    sevenths,
    minorChords,
    majorChords
} from './chords'

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