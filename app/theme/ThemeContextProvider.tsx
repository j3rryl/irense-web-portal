"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { FC, PropsWithChildren } from 'react';
import { getDesignTokens } from './theme';
import { PaletteMode } from '@mui/material';




export const ThemeContextProvider:FC<PropsWithChildren>=({children})=> {
const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    // <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

