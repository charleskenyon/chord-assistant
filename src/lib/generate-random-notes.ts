import curry from 'ramda/src/curry';
import pipe from 'ramda/src/pipe';
import { getRandomIndexBetweenZeroAndN } from './utils';
import { NOTE_IDENTIFIER_MAP, SCALES } from '../constants';
import { ScaleNote } from '../types';

export const getNotesFromNoteIdentifiers = (noteIdentifiers: string[]) =>
  noteIdentifiers.map((noteIdentifier) => NOTE_IDENTIFIER_MAP[noteIdentifier]);

export const findMatchingScales = (inputNotes: ScaleNote[]) =>
  SCALES.filter((scale) => inputNotes.every((note) => scale.includes(note)));

export const getRandomScale = (scales: ScaleNote[][]) =>
  scales[getRandomIndexBetweenZeroAndN(scales.length)];

export const removeInputNotesFromScale = curry(
  (inputNotes: string[], scaleNotes: ScaleNote[]) =>
    (scaleNotes || []).filter((scaleNote) => !inputNotes.includes(scaleNote))
);

export const pickRandomNotes = curry(
  (maxAddedNotes: number, scaleNotes: ScaleNote[]) =>
    scaleNotes
      .sort(() => 0.5 - Math.random())
      .slice(0, getRandomIndexBetweenZeroAndN(maxAddedNotes) + 1)
);

const generateRandomNotes = curry(
  (maxAddedNotes: number, noteIdentifiers: string[]) => {
    return pipe(getNotesFromNoteIdentifiers, (inputNotes: ScaleNote[]) => {
      return pipe(
        findMatchingScales,
        getRandomScale,
        removeInputNotesFromScale(inputNotes) as (
          scaleNotes: string[]
        ) => string[],
        pickRandomNotes(maxAddedNotes)
      )(inputNotes);
    })(noteIdentifiers);
  }
);

export default generateRandomNotes;
