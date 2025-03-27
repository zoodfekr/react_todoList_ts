import { green, grey, purple, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#433878'
    // }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1.75rem'
    },
    body1: {
      fontSize: '0.87rem'
    },
    body2: {
      fontSize: '0.875rem'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // استفاده از رنگ‌های سفارشی برای دکمه‌ها
          '&.confirm-btn': {
            color: 'white',
            backgroundColor: green[500],
            '&:hover': {
              backgroundColor: green[700]
            }
          },
          '&.delete-btn': {
            color: 'white',
            backgroundColor: red[500],
            '&:hover': {
              backgroundColor: red[700]
            }
          },
          '&.cancel-btn': {
            color: 'white',
            backgroundColor: grey[500],
            '&:hover': {
              backgroundColor: grey[700]
            }
          }
        }
      }
    }
  }
});

export const darktheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: {
      main: purple[500]
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1.75rem'
    },
    body1: {
      fontSize: '0.87rem'
    },
    body2: {
      fontSize: '0.875rem'
    }
  }
});
