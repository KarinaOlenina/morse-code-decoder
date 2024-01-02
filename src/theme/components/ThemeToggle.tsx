import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import ms from 'ms.macro';
import React, { useCallback, useEffect } from 'react';
import {
  LightMode,
  DarkMode ,
} from '@mui/icons-material';

import {
  addMediaQueryListener,
  removeMediaQueryListener,
} from '../../utils/matchMedia';
import { Segment, SegmentedControl } from './SegmentedControl';
import Row from "../../components/Row/Row";
import MorseTypography from "../MorseTypography";

const THEME_UPDATE_DELAY = ms`0.1s`;
const DARKMODE_MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: dark)');

export enum ThemeMode {
  LIGHT,
  DARK,
}

// Tracks the device theme
const systemThemeAtom = atom<ThemeMode.LIGHT | ThemeMode.DARK>(
  DARKMODE_MEDIA_QUERY.matches ? ThemeMode.DARK : ThemeMode.LIGHT
);

// Tracks the user's selected theme mode
const themeModeAtom = atomWithStorage<ThemeMode>(
  'interface_color_theme',
  ThemeMode.LIGHT
);

export function SystemThemeUpdater(): null {
  const setSystemTheme = useSetAtom(systemThemeAtom);

  console.log(systemThemeAtom);

  const listener = useCallback(
    (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? ThemeMode.DARK : ThemeMode.LIGHT);
    },
    [setSystemTheme]
  );

  useEffect(() => {
    addMediaQueryListener(DARKMODE_MEDIA_QUERY, listener);
    return () => removeMediaQueryListener(DARKMODE_MEDIA_QUERY, listener);
  }, [setSystemTheme, listener]);

  return null;
}

export function useIsDarkMode(): boolean {
  const mode = useAtomValue(themeModeAtom);

  return mode === ThemeMode.DARK;
}

export default function ThemeToggle({
  disabled,
}: {
  disabled?: boolean;
}): JSX.Element {
  const [mode, setMode] = useAtom(themeModeAtom);
  const switchMode = useCallback(
    (mode: ThemeMode) => {
      // Switch feels less jittery with short delay
      !disabled && setTimeout(() => setMode(mode), THEME_UPDATE_DELAY);
    },
    [disabled, setMode]
  );

  return (
    <Row align="center">
      <Row width="40%">
        <MorseTypography
          fontWeight={500}
          fontSize="14px"
          textAlign="left"
          color="custom.textPrimary">
          Theme
        </MorseTypography>
      </Row>
      <Row flexGrow={1} justifyContent="flex-end" width="60%">
        <SegmentedControl selected={mode} onSelect={switchMode}>
          <Segment
            value={ThemeMode.LIGHT}
            Icon={LightMode}
            testId="theme-lightmode"
          />
          <Segment value={ThemeMode.DARK} Icon={DarkMode} testId="theme-darkmode" />
        </SegmentedControl>
      </Row>
    </Row>
  );
}
