import splitEvery from 'ramda/src/splitEvery';
import fromPairs from 'ramda/src/fromPairs';
import pipe from 'ramda/src/pipe';
import { NotesDictionary, NoteTuple } from '../types';

function formatInput(input: number[]): NotesDictionary {
  return pipe(
    splitEvery(2),
    fromPairs as (noteTuples: NoteTuple[]) => NotesDictionary
  )(input);
}

export default formatInput;
