import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from '@mui/material';

import defaultTheme from './default-theme';
import darknessTheme from "./darkness-theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  return (
    <StyledComponentsThemeProvider theme={darknessTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
