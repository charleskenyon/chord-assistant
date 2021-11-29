import equal from 'deep-equal';
import * as generateRandomNotes from './generate-random-notes';

jest.mock('../constants', () => {
  const mockScale = ['C', 'E', 'G', 'A', 'B'];
  const mockNoteIdentifierMap = {
    '60': 'C',
    '61': 'C#',
    '62': 'D',
    '63': 'D#',
    '64': 'E',
    '65': 'F',
    '66': 'F#',
    '67': 'G',
    '68': 'G#',
    '69': 'A',
    '70': 'A#',
    '71': 'B',
  };

  return {
    SCALES: [mockScale],
    NOTE_IDENTIFIER_MAP: mockNoteIdentifierMap,
  };
});

const maxAddedNotes = 1;

describe('generateRandomNotes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should generate up to N random notes from a scale that matches the input notes', () => {
    const mockInputNoteIdentifiers = ['60', '64', '67'];
    const mockInputNotes = ['C', 'E', 'G'];

    const getNotesFromNoteIdentifiersSpy = jest.spyOn(
      generateRandomNotes,
      'getNotesFromNoteIdentifiers'
    );

    const findMatchingScalesSpy = jest.spyOn(
      generateRandomNotes,
      'findMatchingScales'
    );

    const output = generateRandomNotes.default(
      maxAddedNotes,
      mockInputNoteIdentifiers
    );

    expect(equal(output, ['A']) || equal(output, ['B'])).toBe(true);
    expect(getNotesFromNoteIdentifiersSpy).toHaveBeenCalledWith(
      mockInputNoteIdentifiers
    );
    expect(findMatchingScalesSpy).toHaveBeenCalledWith(mockInputNotes);
  });

  it('should return no random notes (empty array) if input notes do not match any scale', () => {
    const mockInputNoteIdentifiers = ['61', '65', '69']; // C# F A not all present in mockScale ['C', 'E', 'G', 'A', 'B']
    const output = generateRandomNotes.default(
      maxAddedNotes,
      mockInputNoteIdentifiers
    );
    expect(output).toEqual([]);
  });
});
