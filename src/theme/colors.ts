import { Colors, DarkTheme, LightTheme } from './theme';

export const colors: Colors = {
  white: '#FFFFFF',
  gray50: '#EBEBEB',
  gray100: '#E8ECFB',
  gray150: '#D2D9EE',
  gray200: '#B8C0DC',
  gray300: '#bdbdbd',
  gray400: '#7780A0',
  gray500: '#5D6785',
  gray600: '#404A67',
  gray700: '#293249',
  gray800: '#131A2A',
  gray900: '#0D111C',
  pink300: '#ff79f2',
  red400: '#FA2B39',
  red500: '#F9374E',
  gold200: '#EEB317',
  gold400: '#B17900',
  green200: '#8CFF79',
  green300: '#40B66B',
  green500: '#01A686',
  green600: '#32C36C',
  blue200: '#ADBCFF',
  blue400: '#4C82FB',
  blue600: '#2172E5',
  purple900: '#1C0337',
  orange400: '#F86800',
  networkEthereum: '#627EEA',
};

export const gapValues = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '24px',
  xl: '32px',
};

export type Gap = keyof typeof gapValues;

export const opacities = {
  hover: 0.6,
  click: 0.4,
  disabled: 0.5,
  enabled: 1,
};

export const navDimensions = {
  height: 72,
  verticalPad: 20,
};

const commonTheme = {
  white: colors.white,

  chain_1: colors.networkEthereum,

  brandedGradient:
    'linear-gradient(90deg, rgba(1,166,134,1) 0%, rgba(168,255,238,1) 100%);',
  promotionalGradient:
    'radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%);',

  grids: gapValues,
  opacity: opacities,
  navHeight: navDimensions.height,
  navVerticalPad: navDimensions.verticalPad,
};

export const darkTheme: DarkTheme = {
  ...commonTheme,

  background: colors.gray800,
  background2: colors.gray600,
  backgroundSurface: colors.gray900,
  backgroundModule: colors.gray800,
  backgroundInteractive: colors.gray700,
  backgroundIsSubscriber: colors.green600,
  backgroundIsNotSubscriber: colors.red500,
  backgroundTooltip: colors.gray700,

  primary4: colors.gray700,

  textPrimary: colors.white,
  textSecondary: colors.gray300,
  textTertiary: colors.gray300,
  textLoader: colors.gray200,

  accentAction: colors.orange400,
  accentActive: colors.orange400,
  accentGreen: colors.green200,
  accentPink: colors.gold200,
  accentChart: colors.blue600,


  accentTextLightPrimary: colors.gray50,
  selectTokenBg: colors.gray800,

  deepShadow:
    '12px 16px 24px rgba(0, 0, 0, 0.24), 12px 8px 12px rgba(0, 0, 0, 0.24), 4px 4px 8px rgba(0, 0, 0, 0.32);',

};

export const lightTheme: LightTheme = {
  ...commonTheme,

  background: colors.white,
  background2: colors.gray200,
  backgroundSurface: colors.white,
  backgroundModule: colors.gray50,
  backgroundInteractive: colors.gray100,
  backgroundIsSubscriber: colors.green500,
  backgroundIsNotSubscriber: colors.red500,
  backgroundTooltip: colors.white,

  primary4: '#01a6860f',

  textPrimary: colors.gray900,
  textSecondary: colors.gray400,
  textTertiary: colors.gray300,
  textLoader: colors.gray300,

  accentAction: colors.green500,
  accentActive: colors.blue400,
  accentGreen: colors.green200,
  accentPink: colors.pink300,
  accentChart: colors.blue600,


  accentTextLightPrimary: colors.gray50,
  selectTokenBg: colors.gray50,

  deepShadow:
    '8px 12px 20px rgba(51, 53, 72, 0.04), 4px 6px 12px rgba(51, 53, 72, 0.02), 4px 4px 8px rgba(51, 53, 72, 0.04);',
};
