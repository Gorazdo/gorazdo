import { createMuiTheme } from '@material-ui/core';

const light = createMuiTheme({
  name: 'light',
  type: 'light',
  palette: {
    misc: {
      scrollbarThumb: '#999',
    },
    background: {
      paper: '#f4f4f4',
      default: 'white',
    },
    primary: {
      main: '#2626a9',
    },
  },
});

export default light;
