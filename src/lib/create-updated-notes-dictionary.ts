import curry from 'ramda/src/curry';
import { NotesDictionary } from '../types';

export const pickRandomVelocityFromVelocityRange = (
  noteVelocities: number[]
) => {
  const min = Math.min(...noteVelocities);
  const max = Math.max(...noteVelocities);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createUpdatedNotesDictionary = curry(
  (notesDictionary: NotesDictionary, newNoteIdentifiers: string[]) => {
    const noteVelocities = Object.keys(notesDictionary).map(
      (key) => notesDictionary[key]
    );
    return newNoteIdentifiers.reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: pickRandomVelocityFromVelocityRange(noteVelocities),
      }),
      { ...notesDictionary }
    );
  }
);

export default createUpdatedNotesDictionary;
