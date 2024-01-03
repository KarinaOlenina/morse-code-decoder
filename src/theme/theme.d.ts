import { TypographyOptions } from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';

import { colors, gapValues, navDimensions, opacities } from './colors';

export interface Colors {
  white: string;
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  pink300: string;
  green200: string;
}

export interface Theme {
  white: string;

  brandedGradient: string;
  promotionalGradient: string;

  grids: typeof gapValues;
  opacity: typeof opacities;
  navHeight: typeof navDimensions.height;
  navVerticalPad: typeof navDimensions.verticalPad;
}

export interface LightTheme extends Theme {
  background: string;
  backgroundSurface: string;
  backgroundModule: string;

  textPrimary: string;
  textSecondary: string;
  textTertiary: string;

  accentGreen: string;
  accentPink: colors.pink300;

  deepShadow: string;
}

export type DarkTheme = LightTheme;

declare module '@mui/material/styles' {
  interface Palette {
    custom: LightTheme;
  }

  interface PaletteOptions extends Partial<Palette> {
    custom: Partial<LightTheme>;
  }

  interface BreakpointOverrides {
    xxl: true;
    xxxl: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontFamily: true;
    // regular
    rxlg58: true;
    rxlg38: true;
    rm28: true;
    rsm16: true;
    rsm14: true;
    rxs12: true;

    // medium
    mxlg48: true;
    mxlg36: true;
    mxlg28: true;
    mxlg20: true;
    mm16: true;
    ms14: true;
    mxs12: true;
    mxs11: true;

    //semi-bold
    smxlg36: true;
    smxlg26: true;
    smxlg24: true;
    smxlg20: true;
    sblg18: true;
    sbm16: true;
    sbsm14: true;
    sbsm12: true;
    sbsm8: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  // regular
  rxlg58: CSSProperties;
  rxlg38: CSSProperties;
  rm28: CSSProperties;
  rsm16: CSSProperties;
  rsm14: CSSProperties;
  rxs12: CSSProperties;

  // medium
  mxlg48: CSSProperties;
  mxlg36: CSSProperties;
  mxlg28: CSSProperties;
  mxlg20: CSSProperties;
  mm16: CSSProperties;
  ms14: CSSProperties;
  mxs12: CSSProperties;
  mxs11: CSSProperties;

  //semi-bold
  smxlg36: CSSProperties;
  smxlg26: CSSProperties;
  smxlg24: CSSProperties;
  smxlg20: CSSProperties;
  sblg18: CSSProperties;
  sbm16: CSSProperties;
  sbsm14: CSSProperties;
  sbsm12: CSSProperties;
  sbsm8: CSSProperties;
}
