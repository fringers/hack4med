import { createTheme } from '@mui/material/styles';
import { teal, blueGrey, amber } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[600],
      light: "#FFFFFF",
      dark: teal[900],
    },
    secondary: {
      main: amber[600],
      light: amber[100],
      dark: amber[900],
    },
  },
});

export const offlineTheme = createTheme({
  palette: {
    primary: {
      main: '#808080',
      light: '#F5F5F5',
      dark: '#303030',
    },
    secondary: {
      main: blueGrey[600],
      light: blueGrey[100],
      dark: blueGrey[900],
    },
  },
});
