import React from 'react';
import { Card as NextUICard, CardProps as NextUICardProps } from '@nextui-org/react';

export interface CardProps extends NextUICardProps {
  // Add any custom props here
}

export const Card: React.FC<CardProps> = (props) => {
  return <NextUICard {...props} />;
};