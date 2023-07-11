import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '@themes'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/d-prowser.prototype/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='d-prowser' />
        <link rel='apple-touch-icon' href='/d-prowser.prototype/logo192.png' />
        <link rel='manifest' href='/d-prowser.prototype/manifest.json' />
        <title>d-prowser</title>
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}

export default App
