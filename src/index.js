import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
      ligth: '#6d6d6d',
      dark: '#000000'
    },
    secondary: {
      main: '#4dd0e1',
      ligth: '#88ffff'
    },
    default: {
      main: '#E133D8'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
