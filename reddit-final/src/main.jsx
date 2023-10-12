import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/Store'
import { BrowserRouter as Router } from 'react-router-dom';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  </Router>
);