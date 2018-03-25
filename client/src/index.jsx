import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from './reducers/index.js';
import App from './components/App.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);