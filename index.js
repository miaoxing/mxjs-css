import {css as emotionCss} from '@emotion/react';
import {getConfig} from '@fower/core';

export {css} from '@chakra-ui/styled-system';

// float
export const floatLeft = () => emotionCss({float: 'left'});
export const floatRight = () => emotionCss({float: 'right'});
export const floatNone = () => emotionCss({float: 'none'});

// visibility
export const visible = () => emotionCss({visibility: 'visible'});
export const invisible = () => emotionCss({visibility: 'hidden'});

/**
 * @experimental 用于生成负数，考虑其他支持方式
 */
export const spacing = (n) => {
  return getConfig().theme.spacings[n];
};
