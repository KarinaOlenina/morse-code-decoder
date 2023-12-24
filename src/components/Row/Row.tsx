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
  justify?: string;
  align?: string;
  gap?: Gap | string;
  border?: string;
  borderRadius?: string;
  width?: string;
  padding?: string;
}>(({ justify, align, gap, border, borderRadius, width, padding }) => ({
  display: 'flex',
  justifyContent: `${justify || 'flex-start'}`,
  alignItems: `${align || 'center'}`,
  gap: `${gap}`,
  border: `${border}`,
  borderRadius: `${borderRadius}`,
  width: `${width || '100%'}`,
  padding: `${padding || 0}`,
}));

export default Row;