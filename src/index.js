import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './context/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>     
  </Provider>,
  document.getElementById('root')
);
