import React from 'react';
import ReactDOM from 'react-dom';

import { initSW } from './serviceWorkers/index';

initSW();

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
