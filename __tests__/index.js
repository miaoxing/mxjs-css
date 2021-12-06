import {css} from '..';
import {css as originalCss} from '@fower/core';

describe('css', () => {
  test('css', () => {
    expect(originalCss).toBe(css);
  });
});
