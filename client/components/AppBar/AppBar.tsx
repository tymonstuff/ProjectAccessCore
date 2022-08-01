import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Box from '../Box/Box';
import Button from '../Button/Button';

import { signOut, redirectToAuth } from "supertokens-auth-react/recipe/emailpassword";

export default function BasicAppBar() {

  async function handleLogOut() {
    await signOut();
    redirectToAuth();
  }

  return (
    <Box
      component="span"
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          <Button
            href="/"
            color="inherit"
          >
            Home
          </Button>
          <Button
            href="/profile"
            color="inherit"
          >
            Profile
          </Button>
          <Button
            onClick={handleLogOut}
            color="inherit"
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}