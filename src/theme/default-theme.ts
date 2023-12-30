import { createTheme, PaletteOptions } from '@mui/material';

import baseTheme, { BREAKPOINTS, transitions } from './base-theme';
import { lightTheme } from './colors';

const defaultPalette: PaletteOptions = {
  custom: {
    ...lightTheme,
  },
};

const defaultTheme = createTheme(baseTheme, {
  palette: defaultPalette,
  breakpoints: {
    values: BREAKPOINTS,
  },
  transitions,
});

export default defaultTheme;
