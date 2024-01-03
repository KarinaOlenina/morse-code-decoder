import React, { useMemo } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from '@mui/material';

import defaultTheme from './default-theme';
import darknessTheme from './darkness-theme';
import { useIsDarkMode } from './components/ThemeToggle';

export function getTheme(darkMode: boolean) {
  return {
    darkMode,
    ...(darkMode ? darknessTheme : defaultTheme),
  };
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const darkMode = useIsDarkMode();
  const themeObject = useMemo(() => getTheme(darkMode), [darkMode]);

  return (
    <StyledComponentsThemeProvider theme={themeObject}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
