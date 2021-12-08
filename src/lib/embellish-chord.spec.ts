import equal from 'deep-equal';
import * as embellishChord from './embellish-chord';
import { NotesDictionary } from '../types';

const mockNotesDictionary: NotesDictionary = {
  '48': 100,
  '84': 100,
};

const mockSelectionRange = 12;

describe('embellishChord', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add note identifiers for C to notesDictionary that are lower than the lowest input note identifier (48) and higher than the highest note identifier (84)', () => {
    const getPotentialNoteIdentifiersSpy = jest.spyOn(
      embellishChord,
      'getPotentialNoteIdentifiers'
    );
    const output = embellishChord.default(
      mockNotesDictionary,
      mockSelectionRange,
      ['C']
    );
    console.log(output);
    expect(
      equal(
        {
          ...mockNotesDictionary,
          '36': 100,
        },
        output
      ) ||
        equal(
          {
            ...mockNotesDictionary,
            '96': 100,
          },
          output
        ) ||
        equal(
          {
            ...mockNotesDictionary,
            '36': 100,
            '96': 100,
          },
          output
        )
    ).toBe(true);
    expect(getPotentialNoteIdentifiersSpy).toHaveBeenCalledTimes(1);
    expect(getPotentialNoteIdentifiersSpy.mock.calls[0]).toEqual(['C']);
  });

  it('should return notesDictionary unchanged if there are no generated notes', () => {
    const output = embellishChord.default(
      mockNotesDictionary,
      mockSelectionRange,
      []
    );
    expect(output).toEqual(mockNotesDictionary);
  });
});
