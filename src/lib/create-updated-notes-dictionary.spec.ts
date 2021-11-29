import * as createUpdatedNotesDictionary from './create-updated-notes-dictionary';
import { NotesDictionary } from '../types';

const mockNotesDictionary: NotesDictionary = {
  '60': 100,
  '63': 100,
  '67': 100,
};

describe('createUpdatedNotesDictionary', () => {
  it('should add generated note identifiers to notesDictionary and generate new velocities from range of input note velocities', () => {
    const pickRandomVelocityFromVelocityRangeSpy = jest.spyOn(
      createUpdatedNotesDictionary,
      'pickRandomVelocityFromVelocityRange'
    );
    const output = createUpdatedNotesDictionary.default(mockNotesDictionary, [
      '70',
      '74',
    ]);
    expect(output).toEqual({
      ...mockNotesDictionary,
      '70': 100,
      '74': 100,
    });
    expect(pickRandomVelocityFromVelocityRangeSpy).toBeCalledTimes(2);
    expect(pickRandomVelocityFromVelocityRangeSpy.mock.calls).toEqual([
      [Object.values(mockNotesDictionary)],
      [Object.values(mockNotesDictionary)],
    ]);
  });
});
