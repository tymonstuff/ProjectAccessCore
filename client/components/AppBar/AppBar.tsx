import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '../Link/Link';
import Box from '../Box/Box';
import Button from '../Button/Button';

import { useSessionContext } from 'supertokens-auth-react/recipe/session';

import {
  signOut,
  redirectToAuth,
} from 'supertokens-auth-react/recipe/emailpassword';

export default function BasicAppBar() {
  async function handleLogOut() {
    await signOut();
    redirectToAuth();
  }

  const session = useSessionContext();

  if (session.loading === true) {
    return null;
  }

  // console.log('AppBar RELOAD!');
  // console.log(JSON.stringify(session));

  const isLoggedIn = session.doesSessionExist;

  let hasMenteeView;
  let hasMentorView;

  if (isLoggedIn && !session.loading) {
    const permissions: string[] = session.accessTokenPayload.permissions;
    hasMenteeView = permissions.includes('MenteeView');
    hasMentorView = permissions.includes('MentorView');
  }

  const MenteeButton = () => {
    return (
      <Button
        href="/mentee"
        color="inherit"
        component={Link}
      >
        Mentee Space
      </Button>
    );
  };

  const MentorButton = () => {
    return (
      <Button
        href="/mentor"
        color="inherit"
        component={Link}
      >
        Mentor Space
      </Button>
    );
  };

  const ProfileButton = () => {
    return (
      <Button
        href="/profile"
        color="inherit"
        component={Link}
      >
        Profile
      </Button>
    );
  };

  const LogoutButton = () => {
    return (
      <Button
        color="inherit"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    );
  };

  return (
    <Box
      component="span"
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          {isLoggedIn ? (
            <>
              {hasMentorView ? <MentorButton /> : <></>}
              {hasMenteeView ? <MenteeButton /> : <></>}
              <ProfileButton />
              <LogoutButton />
            </>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
