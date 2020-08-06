import {
    scales
} from './scales'
import {
    chordProgressions,
    sevenths,
    minorChords,
    majorChords
} from './chords'

/* Attaching the given pattern to the button with the given ID.
 * Button plays the pattern on click.
 */
const buttonFactory = (btnId, pattern) => {
    const button = document.getElementById(btnId);
    button.addEventListener("click", () => pattern());
}

(() => {
    // Pentatonic or five-note scales
    buttonFactory("majorP", scales.pentatonicScales.Major);
    buttonFactory("minorP", scales.pentatonicScales.Minor);
    buttonFactory("egyptian", scales.pentatonicScales.Egyptian);
    buttonFactory("indian", scales.pentatonicScales.Indian);
    buttonFactory("ritusen", scales.pentatonicScales.Ritusen);
    buttonFactory("ionian", scales.pentatonicScales.Ionian)
    // Hepatonic or seven-note scales
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
    // Octatonic or eight-note scales
    buttonFactory("bebop", scales.octatonicScales.Bebop);
    buttonFactory("bebopMajor", scales.octatonicScales.BebopMajor);
    buttonFactory("bebopMinor", scales.octatonicScales.BebopMinor);
    buttonFactory("purviRaga", scales.octatonicScales.PurviRaga);
    buttonFactory("ichikosucho", scales.octatonicScales.Ichikosucho);
    buttonFactory("kafiRaga", scales.octatonicScales.KafiRagi);
    // Chromatic Scale
    buttonFactory("chromatic", scales.chromaticScales.Chromatic);
    // Major Chords
    buttonFactory("majorC", majorChords.majorC);
    buttonFactory("majorCs", majorChords.majorCs);
    buttonFactory("majorD", majorChords.majorD);
    buttonFactory("majorDs", majorChords.majorDs);
    buttonFactory("majorE", majorChords.majorE);
    buttonFactory("majorF", majorChords.majorF);
    buttonFactory("majorFs", majorChords.majorFs);
    buttonFactory("majorG", majorChords.majorG);
    buttonFactory("majorGs", majorChords.majorGs);
    buttonFactory("majorA", majorChords.majorA);
    buttonFactory("majorAs", majorChords.majorAs);
    buttonFactory("majorB", majorChords.majorB);
    // Minor Chords
    buttonFactory("minorC", minorChords.minorC);
    buttonFactory("minorCs", minorChords.minorCs);
    buttonFactory("minorD", minorChords.minorD);
    buttonFactory("minorDs", minorChords.minorDs);
    buttonFactory("minorE", minorChords.minorE);
    buttonFactory("minorF", minorChords.minorF);
    buttonFactory("minorFs", minorChords.minorFs);
    buttonFactory("minorG", minorChords.minorG);
    buttonFactory("minorGs", minorChords.minorGs);
    buttonFactory("minorA", minorChords.minorA);
    buttonFactory("minorAs", minorChords.minorAs);
    buttonFactory("minorB", minorChords.minorB);
    // Sevenths
    buttonFactory("dominant7th", sevenths.chords.Dominant);
    buttonFactory("major7th", sevenths.chords.Major);
    buttonFactory("minor7th", sevenths.chords.Minor);
    buttonFactory("halfDim7th", sevenths.chords.HalfDim);
    buttonFactory("dim7th", sevenths.chords.Dim);
    // Progressions
    buttonFactory("circle", chordProgressions.progressions.Circle);
    buttonFactory("50s", chordProgressions.progressions.Fiftys);
    buttonFactory("251", chordProgressions.progressions.TwoFiveOne);
    buttonFactory("1564", chordProgressions.progressions.OneFiveSixFour);
})();