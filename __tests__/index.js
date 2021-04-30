import {css} from '..';
import {css as originalCss} from '@chakra-ui/styled-system';

describe('css', () => {
  test('css', () => {
    expect(originalCss).toBe(css);
  });
});
