import * as React from 'react';

import MUIButton from '@mui/material/Button';
import ButtonProps from './Button.types';

export default function Button({
  color,
  variant,
  fullWidth,
  disabled,
  type,
  sx,
  onClick,
  href,
  children,
}: ButtonProps) {
  return (
    <MUIButton
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      sx={sx}
      onClick={onClick}
      href={href}
    >
      {children}
    </MUIButton>
  );
}
