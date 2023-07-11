import '@mui/material/styles'
import '@emotion/react'
import { Theme as MuiTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      white: string
    }
    devices: {
      mobile: `${number}px`
      tablet: `${number}px`
      desktop: `${number}px`
    }
  }

  interface ThemeOptions {
    colors: {
      white: string
    }
    devices: {
      mobile: `${number}px`
      tablet: `${number}px`
      desktop: `${number}px`
    }
  }
}

declare module '@emotion/react' {
  interface Theme extends MuiTheme {
    colors: {
      white: string
    }
    devices: {
      mobile: `${number}px`
      tablet: `${number}px`
      desktop: `${number}px`
    }
  }
}
