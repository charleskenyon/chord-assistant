import map from 'ramda/src/map';
import pipe from 'ramda/src/pipe';
import toPairs from 'ramda/src/toPairs';
import flatten from 'ramda/src/flatten';
import {
  formatInput,
  generateRandomNotes,
  embellishChord,
  postOutputToMax,
} from './lib';
import { NotesDictionary } from './types';

inlets = 1;
outlets = 1;
let maxAddedNotes = 2;

// setmaxaddednotes will be called externally by Max
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function setmaxaddednotes(value: number) {
  maxAddedNotes = value;
}

// list will be called externally by Max e.g. list(60, 100, 63, 90, 67, 80);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function list(...input: number[]) {
  return pipe(
    formatInput,
    (notesDictionary: NotesDictionary) => {
      const noteIdentifiers = Object.keys(notesDictionary);
      return pipe(
        generateRandomNotes(maxAddedNotes) as (
          noteIdentifiers: string[]
        ) => string[],
        embellishChord(notesDictionary)
      )(noteIdentifiers);
    },
    toPairs,
    flatten,
    map(Number),
    postOutputToMax
  )(input);
}
