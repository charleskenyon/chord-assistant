import filterNoteIdentifiers from './filter-note-identifiers';

const mockPotentialNoteIdentifiers = ['36', '48', '60', '72'];

describe('filterNoteIdentifiers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should filter potential note identifiers in treble clef if input note identfier average is >= 60', () => {
    const output = filterNoteIdentifiers(60, mockPotentialNoteIdentifiers);
    expect(output).toEqual(['36', '48']);
  });

  it('should filter potential note identifiers in bass clef if input note identfier average is < 60', () => {
    const output = filterNoteIdentifiers(59, mockPotentialNoteIdentifiers);
    expect(output).toEqual(['60', '72']);
  });
});
