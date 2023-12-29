import { Box, styled } from '@mui/material';
import { Gap } from '../Row/Row';

export const Column = styled(Box)<{
  gap?: Gap | string;
}>(({ gap, justifyContent}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: `${justifyContent || 'flex-start'}`,
  gap: `${gap}`,
}));

export default Column;
