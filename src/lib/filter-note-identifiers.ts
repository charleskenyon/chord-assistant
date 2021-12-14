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
            noteIdentifier < noteIdentifierLowest - 1) ||
          (noteIdentifier <= hightestPossibleIdentifier &&
            noteIdentifier > noteIdentifierHighest + 1)
      )
      .map(String);
  }
);

export default filterNoteIdentifiers;
