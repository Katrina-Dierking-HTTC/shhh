import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import store from './components/triviaRedux/store';
import {Provider} from 'react-redux';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'


const theme = createMuiTheme({palette: {type: 'dark'}});

ReactDOM.render(
  <Router>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline/>
      <App />
    </Provider>
  </ThemeProvider>
  </Router>,
    
  document.getElementById('root')
);