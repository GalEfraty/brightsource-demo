import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './components/main/Main.js';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
