import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp);

render(
  <App store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
