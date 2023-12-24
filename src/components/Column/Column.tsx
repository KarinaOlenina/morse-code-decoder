import { Box, styled } from '@mui/material';
import {Gap} from "../Row/Row";

export const Column = styled(Box)<{
  gap?: Gap;
}>(({ gap }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: `${gap}`,
}));

export default Column;
