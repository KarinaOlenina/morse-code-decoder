import React from 'react';
import {Slider, styled} from '@mui/material';
import MorseTypography from "../../theme/MorseTypography";

type SliderProps = {
    value: number;
    onChange: (event: Event, newValue: number | number[]) => void;
    valueLabelDisplay: 'auto' | 'on' | 'off';
    step: number;
    min: number;
    max: number;
    label: string;
};

const StyledSlider = styled(Slider)(({theme}) => ({
    color: theme.palette.custom.backgroundInteractive,
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: theme.palette.custom.accentPink,
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: theme.palette.custom.accentPink,
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
}));

const MorseSlider: React.FC<SliderProps> = (
    {
        value,
        label,
        onChange,
        valueLabelDisplay,
        step,
        min,
        max,
    }
) => (
    <div>
        <MorseTypography variant={'rxlg38'}>
            {label}
        </MorseTypography>
        <StyledSlider
            aria-label={label}
            value={value}
            onChange={onChange}
            valueLabelDisplay={valueLabelDisplay}
            step={step}
            marks
            min={min}
            max={max}
        />
    </div>
);

export default MorseSlider;
