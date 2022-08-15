import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '../Box/Box';

export default function BasicAppBar() {
  return (
    <Box
      component="span"
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          <></>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
