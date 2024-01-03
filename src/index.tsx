import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import { SystemThemeUpdater } from './theme/components/ThemeToggle';

function Updaters(): JSX.Element {
  return (
    <Fragment>
      <SystemThemeUpdater />
    </Fragment>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Updaters />
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
