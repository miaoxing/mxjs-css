import {getConfig} from '@fower/core';

export {css} from '@fower/core';

/**
 * @experimental 用于生成负数，考虑其他支持方式
 */
export const spacing = (n) => {
  return getConfig().theme.spacings[n];
};
