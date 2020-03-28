import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: { main: '#14FFEC' },
      type: 'dark',
      background: {
        paper: '#323232',
        default: '#212121',
      },
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontFamily: 'Monoton, cursive',
        fontSize: '2.4rem',
      },
    },
  })
);

export default theme;
