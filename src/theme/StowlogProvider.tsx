import React from 'react';
import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';
import { lightTheme, darkTheme } from '../utils/theme';

export interface StowlogProviderProps extends Omit<NextUIProviderProps, 'theme'> {
  theme?: 'light' | 'dark';
}

export const StowlogProvider: React.FC<StowlogProviderProps> = ({ children, theme = 'light', ...props }) => {
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <NextUIProvider theme={selectedTheme} {...props}>
      {children}
    </NextUIProvider>
  );
};