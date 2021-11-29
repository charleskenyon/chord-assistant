import equal from 'deep-equal';
import * as embellishChord from './embellish-chord';
import { NotesDictionary } from '../types';

const mockTrebleNotesDictionary: NotesDictionary = {
  '60': 100,
  '63': 100,
  '67': 100,
};

describe('embellishChord', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add note identifiers to notesDictionary in bass clef if input note are (on average) located in treble clef', () => {
    const getPotentialNoteIdentifiersSpy = jest.spyOn(
      embellishChord,
      'getPotentialNoteIdentifiers'
    );
    const output = embellishChord.default(mockTrebleNotesDictionary, ['C']);
    expect(
      equal(
        {
          ...mockTrebleNotesDictionary,
          '36': 100,
        },
        output
      ) ||
        equal(
          {
            ...mockTrebleNotesDictionary,
            '48': 100,
          },
          output
        )
    ).toBe(true);
    expect(getPotentialNoteIdentifiersSpy).toHaveBeenCalledTimes(1);
    expect(getPotentialNoteIdentifiersSpy.mock.calls[0]).toEqual(['C']);
  });

  it('should add note identifiers to notesDictionary in treble clef if input note are (on average) located in bass clef', () => {
    const mockBassNotesDictionary: NotesDictionary = {
      '48': 100,
      '51': 100,
      '55': 100,
    };
    const getPotentialNoteIdentifiersSpy = jest.spyOn(
      embellishChord,
      'getPotentialNoteIdentifiers'
    );
    const output = embellishChord.default(mockBassNotesDictionary, ['D']);
    expect(
      equal(
        {
          ...mockBassNotesDictionary,
          '62': 100,
        },
        output
      ) ||
        equal(
          {
            ...mockBassNotesDictionary,
            '74': 100,
          },
          output
        )
    ).toBe(true);
    expect(getPotentialNoteIdentifiersSpy).toHaveBeenCalledTimes(1);
    expect(getPotentialNoteIdentifiersSpy.mock.calls[0]).toEqual(['D']);
  });

  it('should return notesDictionary unchanged if there are no generated notes', () => {
    const output = embellishChord.default(mockTrebleNotesDictionary, []);
    expect(output).toEqual(mockTrebleNotesDictionary);
  });
});
