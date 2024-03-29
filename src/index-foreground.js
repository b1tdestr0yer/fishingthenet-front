import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App.js';
import store from './state/CreateStore.js';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#foreground'),
);
