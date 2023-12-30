import React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from '@mui/material';

import defaultTheme from './default-theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {

  return (
    <StyledComponentsThemeProvider theme={defaultTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
