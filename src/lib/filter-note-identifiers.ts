import curry from 'ramda/src/curry';

const filterNoteIdentifiers = curry(
  (
    noteIdentifierLowest: number,
    noteIdentifierHighest: number,
    selectionRange: number,
    potentialNoteIdentifiers: string[]
  ) => {
    const lowestPossibleIdentifier = noteIdentifierLowest - selectionRange;
    const hightestPossibleIdentifier = noteIdentifierHighest + selectionRange;
    return potentialNoteIdentifiers
      .map(Number)
      .filter(
        (noteIdentifier: number) =>
          (noteIdentifier >= lowestPossibleIdentifier &&
            noteIdentifier < noteIdentifierLowest) ||
          (noteIdentifier <= hightestPossibleIdentifier &&
            noteIdentifier > noteIdentifierHighest)
      )
      .map(String);
  }
);

export default filterNoteIdentifiers;
