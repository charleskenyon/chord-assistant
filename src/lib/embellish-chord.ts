import curry from 'ramda/src/curry';
import map from 'ramda/src/map';
import pipe from 'ramda/src/pipe';
import filterNoteIdentifiers from './filter-note-identifiers';
import createUpdatedNotesDictionary from './create-updated-notes-dictionary';
import { getRandomIndexBetweenZeroAndN } from './utils';
import { NOTE_IDENTIFIER_MAP } from '../constants';
import { NotesDictionary, ScaleNote } from '../types';

export const getPotentialNoteIdentifiers = (randomNote: ScaleNote) => {
  return Object.keys(NOTE_IDENTIFIER_MAP).filter((noteIdentifier: string) => {
    return NOTE_IDENTIFIER_MAP[noteIdentifier] == randomNote;
  });
};

const embellishChord = curry(
  (
    notesDictionary: NotesDictionary,
    selectionRange: number,
    randomNotes: ScaleNote[]
  ) => {
    const noteIdentifierNumbers = Object.keys(notesDictionary).map(Number);
    const noteIdentifierLowest = Math.min(...noteIdentifierNumbers);
    const noteIdentifierHighest = Math.max(...noteIdentifierNumbers);
    return pipe(
      map(getPotentialNoteIdentifiers),
      map(
        filterNoteIdentifiers(
          noteIdentifierLowest,
          noteIdentifierHighest,
          selectionRange
        )
      ) as () => string[][],
      map(
        (noteIdentifiers: string[]) =>
          noteIdentifiers[getRandomIndexBetweenZeroAndN(noteIdentifiers.length)]
      ),
      createUpdatedNotesDictionary(notesDictionary)
    )(randomNotes);
  }
);

export default embellishChord;
