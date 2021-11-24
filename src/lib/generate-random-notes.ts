import curry from 'ramda/src/curry';
import pipe from 'ramda/src/pipe';
import { getRandomIndexBetweenZeroAndN } from './utils';
import { NOTE_IDENTIFIER_MAP, SCALES } from '../constants';

const getNotesFromNoteIdentifiers = (noteIdentifiers: string[]) =>
  noteIdentifiers.map((noteIdentifier) => NOTE_IDENTIFIER_MAP[noteIdentifier]);

const findMatchingScales = (inputNotes: string[]) =>
  SCALES.filter((scale) => inputNotes.every((note) => scale.includes(note)));

const getRandomScale = (scales: string[][]) =>
  scales[getRandomIndexBetweenZeroAndN(scales.length)];

const removeInputNotesFromScale = curry(
  (inputNotes: string[], scaleNotes: string[]) =>
    (scaleNotes || []).filter((scaleNote) => !inputNotes.includes(scaleNote))
);

const pickRandomNotes = (scaleNotes: string[]) =>
  scaleNotes
    .sort(() => 0.5 - Math.random())
    .slice(0, getRandomIndexBetweenZeroAndN(2) + 1);

export default function generateRandomNotes(noteIdentifiers: string[]) {
  return pipe(getNotesFromNoteIdentifiers, (inputNotes: string[]) => {
    return pipe(
      findMatchingScales,
      getRandomScale,
      removeInputNotesFromScale(inputNotes) as (
        scaleNotes: string[]
      ) => string[],
      pickRandomNotes
    )(inputNotes);
  })(noteIdentifiers);
}
