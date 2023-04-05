import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';

const App = ({Component, pageProps}: AppProps) => {
  return <>
    <Head>
      <meta charSet="utf-8"/>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="d-prowser" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <title>d-prowser</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default App;
