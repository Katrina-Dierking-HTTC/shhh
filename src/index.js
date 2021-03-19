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

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

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