import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6632FD',
    },
    gray: {
      main: '#5D617E',
    },
    secondary: {
      main: '#EE1A26',
    }
  },
  spacing: 8,
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'serif',
    ].join(','),
  },
});

export default theme;
