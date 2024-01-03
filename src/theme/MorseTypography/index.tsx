import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

import { baseTypographyOptions } from '../base-theme';
import { ExtendedTypographyOptions } from '../theme';

type MorseTypographyProps = TypographyProps<'div', { component?: 'div' }> & {
  variant?:
    | keyof ExtendedTypographyOptions
    | 'inherit'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';
};

export default function MorseTypography({
  variant = 'body1',
  children,
  ...rest
}: MorseTypographyProps): JSX.Element {
  const typographyProps = { ...rest } as TypographyProps<
    'div',
    { component?: 'div' }
  >;
  const variantProps = variant as keyof ExtendedTypographyOptions;

  if (baseTypographyOptions[variantProps]) {
    typographyProps.style = baseTypographyOptions[variantProps] as any;
  }

  return <Typography {...typographyProps}>{children}</Typography>;
}
