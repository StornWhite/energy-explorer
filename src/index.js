import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'url-search-params-polyfill';

import App from './App';
import store from './common/store';
import './index.css';

ReactDOM.render(
  // Provider surrounds App to make the datastore available
  // throughout the application.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
