import map from 'ramda/src/map';
import pipe from 'ramda/src/pipe';
import toPairs from 'ramda/src/toPairs';
import flatten from 'ramda/src/flatten';
import { formatInput, generateRandomNotes, embellishChord } from './lib';
import { NotesDictionary } from './types';

inlets = 1;
outlets = 1;

function list(...input: number[]) {
  return pipe(
    formatInput,
    (notesDictionary: NotesDictionary) => {
      const noteIdentifiers = Object.keys(notesDictionary);
      return pipe(
        generateRandomNotes,
        embellishChord(notesDictionary)
      )(noteIdentifiers);
    },
    toPairs,
    flatten,
    map(Number),
    (output: number[]) => output,
    console.log
  )(input);
}

// inlets = 1
// outlets = 3
// outlet(note, note, note)
// inlet === 0
// 60 middle c

list(60, 100, 63, 90, 67, 80);

// es3 docker instance
// run with terminal function call
