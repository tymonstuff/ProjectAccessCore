import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '../Link/Link';
import Box from '../Box/Box';
import Button from '../Button/Button';

import { useContext, useState, useEffect } from 'react';
import UserContext from '../../store/user-context';

import {
  signOut,
  redirectToAuth,
} from 'supertokens-auth-react/recipe/emailpassword';
import { Co2Sharp } from '@mui/icons-material';

export default function BasicAppBar() {
  async function handleLogOut() {
    await signOut();
    redirectToAuth();
  }

  const userCtx = useContext(UserContext);

  const [isMentee, setIsMentee] = useState(false);
  const [isMentor, setIsMentor] = useState(false);

  useEffect(() => {
    if (userCtx.roles.length > 0) {
      setIsMentee(userCtx.roles.includes('mentee'));
      setIsMentor(userCtx.roles.includes('mentor'));
    }
  }, [isMentee, isMentor, userCtx.roles]);

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

  // console.log(userCtx.roles);
  // console.log(userCtx.permissions);

  return (
    <Box
      component="span"
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          <>
            {isMentor ? <MentorButton /> : <></>}
            {isMentee ? <MenteeButton /> : <></>}
            <ProfileButton />
            <LogoutButton />
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
