import type { AppProps } from 'next/app';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../theme/theme';
import AppBar from '../components/AppBar/AppBar';

import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';
import { frontendConfig } from '../config/frontendConfig';

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SuperTokensWrapper>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </SuperTokensWrapper>
  );
}

export default MyApp;
