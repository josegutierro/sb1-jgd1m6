import React from 'react';
import { Button as NextUIButton, ButtonProps as NextUIButtonProps } from '@nextui-org/react';

export interface ButtonProps extends NextUIButtonProps {
  // Add any custom props here
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <NextUIButton {...props} />;
};