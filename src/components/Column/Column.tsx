import { Box, styled } from '@mui/material';
import { Gap } from '../Row/Row';

export const Column = styled(Box)<{
  gap?: Gap | string;
}>(({ gap, justifyContent, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: `${justifyContent || 'flex-start'}`,
  gap: `${gap}`,

  [theme.breakpoints.down('md')]: {
    gap: '10px',
  },
}));

export default Column;
