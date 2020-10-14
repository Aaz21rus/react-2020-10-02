import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './components/app';

import { restaurants } from './fixtures';
import store from './redux/store';

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App restaurants={restaurants} />
    >>>>>>> 89e4a3e7529429ef22b9dc362284cd2f883147a1
  </Provider>,
  document.getElementById('root')
);
