import type { AppProps } from 'next/app';
import Head from 'next/head';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../theme/theme';
import AppBar from '../components/AppBar/AppBar';

import '../styles/globals.css'
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react'
import { frontendConfig } from '../config/frontendConfig'

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig())
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SuperTokensWrapper>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Home App</title>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <AppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </SuperTokensWrapper>
  );
}

export default MyApp;
