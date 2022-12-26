/* eslint-disable jest/prefer-expect-assertions */
// eslint-disable-next-line import/extensions
import { taskFirst, getLast, taskNext } from '../0-constants.js';

describe('taskFirst', () => {
  it('returns a string', () => {
    expect(typeof taskFirst()).toBe('string');
  });
  it('returns the expected string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });
});

describe('getLast', () => {
  it('returns a string', () => {
    expect(typeof getLast()).toBe('string');
  });
  it('returns the expected string', () => {
    expect(getLast()).toBe(' is okay');
  });
});

describe('taskNext', () => {
  it('returns a string', () => {
    expect(typeof taskNext()).toBe('string');
  });
  it('returns the expected string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
