import * as React from 'react';
import ReactDOM from 'react-dom';
import { red, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B8CD9', // blue
    },
    secondary: {
      main: '#FDA929', // yellow
    },
    info: {
      main: '#2A3038', // grey
    },
    error: {
      main: '#EF4200', // pink
    },
    success: {
      main: '#00B497', // green
    },
  },
  spacing: 8,
  typography: {
    //TODO change font family to Corbel - need to ask about licensing
    fontFamily: `'Lato', sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
