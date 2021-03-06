import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root.jsx';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('app')
);