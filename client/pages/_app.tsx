import type { AppProps } from 'next/app';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../theme/theme';

import UserContext from '../store/user-context';
import { getSessionPayload } from '../lib/frontendRoles';
import { useState, useEffect } from 'react';

import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';
import { frontendConfig } from '../config/frontendConfig';

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

function MyApp({ Component, pageProps }: AppProps) {
  const [payload, setPayload] = useState({
    roles: [],
    permissions: [],
  });

  useEffect(() => {
    async function fetchPayload() {
      setPayload(await getSessionPayload());
    }

    fetchPayload();
  }, []);

  interface UserContextInterface {
    roles: Array<string | null>;
    permissions: Array<string | null>;
  }

  const currentUserContext: UserContextInterface = {
    roles: payload ? payload.roles : [],
    permissions: payload ? payload.permissions : [],
  };

  console.log(payload);

  return (
    <SuperTokensWrapper>
      <UserContext.Provider value={currentUserContext}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserContext.Provider>
    </SuperTokensWrapper>
  );
}

export default MyApp;
