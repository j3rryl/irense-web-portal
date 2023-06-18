"use client";
import { createTheme } from '@mui/material/styles';
import React, { FC, PropsWithChildren, createContext, useContext } from 'react';
import { Theme, ThemeProvider} from '@mui/material';
import { getDesignTokens } from './theme';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const ThemeContextProvider:FC<PropsWithChildren>=({children})=> {
const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


