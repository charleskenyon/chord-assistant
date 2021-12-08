import map from 'ramda/src/map';
import pipe from 'ramda/src/pipe';
import toPairs from 'ramda/src/toPairs';
import flatten from 'ramda/src/flatten';
import {
  formatInput,
  generateRandomNotes,
  embellishChord,
  getMaxGlobalVar,
  postOutputToMax,
} from './lib';
import { NotesDictionary } from './types';
import './polyfills';

// list will be called externally by Max e.g. list(60, 100, 63, 90, 67, 80);
const list = (...input: number[]) => {
  return pipe(
    formatInput,
    (notesDictionary: NotesDictionary) => {
      const noteIdentifiers = Object.keys(notesDictionary);
      return pipe(
        generateRandomNotes(getMaxGlobalVar(2, 'maxAddedNotes')) as (
          noteIdentifiers: string[]
        ) => string[],
        embellishChord(notesDictionary, getMaxGlobalVar(7, 'selectionRange'))
      )(noteIdentifiers);
    },
    toPairs,
    flatten,
    map(Number),
    postOutputToMax
  )(input);
};

list(60, 100, 63, 100, 67, 90);

export default list;
