import {getConfig, setConfig} from '@fower/core';
import presetWeb from '@fower/preset-web';

export {css, createStyle} from '@fower/core';

if (getConfig().plugins.length === 0) {
  // 加载默认配置，但是不覆盖已有的配置
  setConfig(presetWeb);
}

/**
 * @experimental 用于生成负数，考虑其他支持方式
 */
export const spacing = (n) => {
  return getConfig().theme.spacings[n];
};
