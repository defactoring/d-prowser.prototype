import React, { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../index.css'
import { ThemeProvider } from '@mui/material'
import { authContext } from 'src/context'
import { theme } from '@themes'
import firebase from 'firebase/compat'

const App = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = useState<firebase.UserInfo | null>(null)
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
      <ThemeProvider theme={theme}>
        <authContext.Provider value={{ user, setUser }}>
          <Component {...pageProps} />
        </authContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
