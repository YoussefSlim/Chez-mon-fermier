// npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// == Import : local
// Components
import AtMyFarmer from './components/AtMyFarmer';
// Store
import store from './store';
// styles
import './styles/index.scss';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <AtMyFarmer />
    </Router>
  </Provider>
);

// The DOM target
const target = document.getElementById('root');
// React render trigger (virtual) => DOM (web page)
render(rootReactElement, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
