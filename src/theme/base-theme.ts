import {ThemeOptions} from "@mui/material";
import { ExtendedTypographyOptions } from './theme';

export enum BREAKPOINTS {
    xs = 396,
    sm = 640,
    md = 768,
    lg = 1024,
    xl = 1280,
    xxl = 1536,
    xxxl = 1920,
}

export enum TRANSITION_DURATIONS {
    slow = 500,
    medium = 250,
    fast = 125,
}

export const transitions = {
    duration: {
        slow: `${TRANSITION_DURATIONS.slow}ms`,
        medium: `${TRANSITION_DURATIONS.medium}ms`,
        fast: `${TRANSITION_DURATIONS.fast}ms`,
    },
    easing: {
        ease: 'ease',
        in: 'ease-in',
        out: 'ease-out',
        inOut: 'ease-in-out',
    },
};

const rootStyles = () => ({
    body: {
        margin: '0',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
    },
    code: {
        fontFamily:
            "Poiret One, sans-serif, monospace",
    },
    "input[type='search']::-ms-clear": {
        display: 'none',
        width: 0,
        height: 0,
    },
    "input[type='search']::-ms-reveal": {
        display: 'none',
        width: 0,
        height: 0,
    },
    "input[type='search']::-webkit-search-decoration, input[type='search']::-webkit-search-cancel-button, input[type='search']::-webkit-search-results-button, input[type='search']::-webkit-search-results-decoration":
        {
            display: 'none',
        },
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '&::-webkit-scrollbar:vertical': {
        display: 'block',
        width: '6px',
    },
    '&::-webkit-scrollbar:horizontal': {
        display: 'block',
        height: '8px',
    },
    '&::-webkit-scrollbar-track': {
        display: 'block',
        backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
        display: 'block',
        backgroundColor: '#7780A0',
        borderRadius: '4px',
        border: '2px solid',
        borderColor: 'transparent',
    },
});

export const baseTypographyOptions: ExtendedTypographyOptions = {
    rxlg58: {
        fontWeight: 400,
        fontSize: '58px',
    },
    rxlg38: {
        fontWeight: 400,
        fontSize: '38px',
    },
    rm28: {
        fontWeight: 400,
        fontSize: '28px',
    },
    rsm16: {
        fontWeight: 400,
        fontSize: '16px',
    },
    rsm14: {
        fontWeight: 400,
        fontSize: '14px',
    },
    rxs12: {
        fontWeight: 400,
        fontSize: '12px',
    },
    mxlg48: {
        fontWeight: 500,
        fontSize: '48px',
    },
    mxlg36: {
        fontWeight: 500,
        fontSize: '36px',
    },
    mxlg28: {
        fontWeight: 500,
        fontSize: '28px',
    },
    mxlg20: {
        fontWeight: 500,
        fontSize: '20px',
    },
    mm16: {
        fontWeight: 500,
        fontSize: '16px',
    },
    ms14: {
        fontWeight: 500,
        fontSize: '14px',
    },
    mxs12: {
        fontWeight: 500,
        fontSize: '12px',
    },
    mxs11: {
        fontWeight: 500,
        fontSize: '11px',
    },
    smxlg36: {
        fontWeight: 600,
        fontSize: '36px',
    },
    smxlg26: {
        fontWeight: 600,
        fontSize: '26px',
    },
    smxlg24: {
        fontWeight: 600,
        fontSize: '24px',
    },
    smxlg20: {
        fontWeight: 600,
        fontSize: '20px',
    },
    sblg18: {
        fontWeight: 600,
        fontSize: '18px',
    },
    sbm16: {
        fontWeight: 600,
        fontSize: '16px',
    },
    sbsm14: {
        fontWeight: 600,
        fontSize: '14px',
    },
    sbsm12: {
        fontWeight: 600,
        fontSize: '12px',
    },
    sbsm8: {
        fontWeight: 600,
        fontSize: '8px',
    },
};

const baseTheme: ThemeOptions = {
    components: {
        MuiCssBaseline: {
            styleOverrides: rootStyles,
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&$expanded': {
                        minHeight: 0,
                    },
                },
            },
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    typography: {
        fontFamily: "Poiret One, sans-serif, monospace",
        ...baseTypographyOptions,
    } as ExtendedTypographyOptions,
} as ThemeOptions;

export default baseTheme;