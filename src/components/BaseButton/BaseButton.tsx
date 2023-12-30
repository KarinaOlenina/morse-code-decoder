import { ButtonBase, styled } from '@mui/material';

export const BaseButton = styled(ButtonBase)<{
  padding?: string;
  borderRadius?: string;
  width?: string;
  to?: string;
}>(({ padding, borderRadius, width, theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  transform: 'perspective(1px) translateZ(0)',
  willChange: 'transform',
  border: '1px solid transparent',
  borderRadius: borderRadius || '20px',
  outline: 'none',
  width: width || '100%',
  padding: padding || '16px',
  cursor: 'pointer',
  fontWeight: '500',
  textAlign: 'center',
  textDecoration: 'none',
  color: theme.palette.custom.textPrimary,

  '&:disabled': {
    opacity: '50%',
    cursor: 'auto',
    pointerEvents: 'none',
  },
  '& > *': {
    userSelect: 'none',
  },
  '& > a': {
    textDecoration: 'none',
  },
}));
