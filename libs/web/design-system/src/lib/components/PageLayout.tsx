import React, { ReactNode } from 'react';
import { Box } from '../core';

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return React.createElement(
    Box,
    {
      sx: {
        backgroundColor: 'primary.background.default',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    children
  );
};
