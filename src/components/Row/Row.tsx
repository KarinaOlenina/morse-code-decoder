import { Box, styled } from '@mui/material';

export const gapValues = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '24px',
  xl: '32px',
};

export type Gap = keyof typeof gapValues;

const Row = styled(Box)<{
  justifyContent?: string;
  align?: string;
  gap?: Gap | string;
  border?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
}>(
  ({
    justifyContent,
    align,
    gap,
    border,
    borderRadius,
    width,
    padding,
    theme,
  }) => ({
    display: 'flex',
    justifyContent: `${justifyContent || 'flex-start'}`,
    alignItems: `${align || 'center'}`,
    gap: `${gap}`,
    border: `${border}`,
    borderRadius: `${borderRadius}`,
    width: `${width || '100%'}`,
    padding: `${padding || 0}`,

    [theme.breakpoints.down('md')]: {
      gap: '10px',
    },
  })
);

export default Row;
