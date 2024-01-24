import React, { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

import shape from './shape'
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'

import {GlobalStyles} from './global'

export function Theme ( { children }: { children: React.ReactNode } ) {
  const themeOptions: unknown = useMemo(
    () => ( {
      palette,
      shape,
      typography,
      shadows,
      customShadows,
    } ),
    []
  )

  const theme       = createTheme( themeOptions )
  theme.components  = componentsOverride( theme )

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
