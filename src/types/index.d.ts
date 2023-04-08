import '@mui/material'
import '@emotion/react'

declare module '@mui/material' {
  interface Theme {
    devices: {
      mobile: `${number}px`
      tablet: `${number}px`
      desktop: `${number}px`
    }
  }

  interface ThemeOptions {
    devices: {
      mobile: `${number}px`
      tablet: `${number}px`
      desktop: `${number}px`
    }
  }
}

declare module '@emotion/react' {
  export interface Theme {
    devices: {
      mobile: `${number}px`
      tablet: `${number}px`
      desktop: `${number}px`
    }
  }
}
