import { hexToRgb } from '@material-ui/core/styles';

export { CSSProperties, StyleRules } from '@material-ui/styles';
export { makeStyles, useTheme, lighten, darken } from '@material-ui/core/styles';

export * from './theme';
export * from './colors';
export * from './fonts';
export * from './WithDarkTheme';
export { makeGradient } from './makeGradient';
export { generateGridSpacingOverrides } from './generateGridSpacingOverrides';

export function rgba(hex: string, alfa: number) {
  const rgb = hexToRgb(hex).replace(/^rgb\((.+?)\)$/, '$1');

  return `rgba(${rgb}, ${alfa})`;
}
