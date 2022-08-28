import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/';
import {createRoot} from 'react-dom/client';

const root1 = document.getElementById('root');
const root = createRoot(root1);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
