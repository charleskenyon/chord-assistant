import curry from 'ramda/src/curry';

const filterNoteIdentifiers = curry(
  (noteIdentifierAverage: number, potentialNoteIdentifiers: string[]) => {
    const middleCNOteIdentifier = 60;
    const isTrebleClef = noteIdentifierAverage >= middleCNOteIdentifier;
    return potentialNoteIdentifiers.filter((noteIdentifier: string) =>
      isTrebleClef
        ? Number(noteIdentifier) < middleCNOteIdentifier
        : Number(noteIdentifier) >= middleCNOteIdentifier
    );
  }
);

export default filterNoteIdentifiers;
