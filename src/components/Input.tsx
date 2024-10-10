import React from 'react';
import { Input as NextUIInput, InputProps as NextUIInputProps } from '@nextui-org/react';

export interface InputProps extends NextUIInputProps {
  // Add any custom props here
}

export const Input: React.FC<InputProps> = (props) => {
  return <NextUIInput {...props} />;
};