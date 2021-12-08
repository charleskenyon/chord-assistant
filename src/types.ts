type NotesDictionary = { [noteIdentifier: string]: number };

type NoteTuple = [noteIdentifier: number, noteVelocity: number];

type ScaleNote =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B';

export { NotesDictionary, NoteTuple, ScaleNote };
