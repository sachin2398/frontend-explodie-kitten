import { red } from '@material-ui/core/colors';

import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#94A187',
    },
    secondary: {
      main: '#01844d',
    },
    action: {
      main: '#01844d',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
