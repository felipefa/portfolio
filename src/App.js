import React from 'react';
import { Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
import theme from './styles/global';

function App() {
  return (
    <Router history={history}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
