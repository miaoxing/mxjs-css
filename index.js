import {css as emotionCss} from '@emotion/react';

// float
export const floatLeft = () => emotionCss({float: 'left'});
export const floatRight = () => emotionCss({float: 'right'});
export const floatNone = () => emotionCss({float: 'none'});

// visibility
export const visible = () => emotionCss({visibility: 'visible'});
export const invisible = () => emotionCss({visibility: 'hidden'});
