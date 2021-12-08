import filterNoteIdentifiers from './filter-note-identifiers';

describe('filterNoteIdentifiers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should filter potential note lower than the lowest input note identifier and higher than the highest input note identifier', () => {
    const mockPotentialNoteIdentifiers = ['36', '48', '60', '72'];
    const mockNoteIdentifierLowest = 48;
    const mockNoteIdentifierHighest = 60;
    const mockSelectionRange = 12;
    const output = filterNoteIdentifiers(
      mockNoteIdentifierLowest,
      mockNoteIdentifierHighest,
      mockSelectionRange,
      mockPotentialNoteIdentifiers
    );
    expect(output).toEqual(['36', '72']);
  });
});
