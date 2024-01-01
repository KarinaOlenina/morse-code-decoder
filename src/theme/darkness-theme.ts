import { createTheme, PaletteOptions } from '@mui/material';

import baseTheme, { BREAKPOINTS, transitions } from './base-theme';
import { darkTheme } from './colors';

const defaultPalette: PaletteOptions = {
  custom: {
    ...darkTheme,
  },
};

const darknessTheme = createTheme(baseTheme, {
  palette: defaultPalette,
  breakpoints: {
    values: BREAKPOINTS,
  },
  transitions,
});

export default darknessTheme;
