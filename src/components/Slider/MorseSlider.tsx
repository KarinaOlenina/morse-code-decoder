import React from 'react';
import {Slider, styled, Typography} from '@mui/material';

type SliderProps = {
    value: number;
    onChange: (event: Event, newValue: number | number[]) => void;
    valueLabelDisplay: 'auto' | 'on' | 'off';
    step: number;
    min: number;
    max: number;
    label: string;
};

const StyledSlider = styled(Slider)({
    color: '#EBEBEB',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#ff79f2',
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
        backgroundColor: '#ff79f2',
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
});

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
        <Typography fontSize={'38px'} fontFamily={'Poiret One, sans-serif'}>
            {label}
        </Typography>
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
