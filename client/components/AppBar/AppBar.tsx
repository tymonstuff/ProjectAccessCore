import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '../Link/Link';
import Box from '../Box/Box';
import Button from '../Button/Button';

export default function BasicAppBar() {
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
            component={Link}
            noLinkStyle
          >
            Home
          </Button>
          <Button
            href="/profile"
            color="inherit"
            component={Link}
            noLinkStyle
          >
            Profile
          </Button>
          <Button
            href="/login"
            color="inherit"
            component={Link}
            noLinkStyle
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
