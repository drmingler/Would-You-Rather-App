import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import {createStore} from "redux";
import middleware from '../src/middleware'
import reducer from '../src/reducers'
import {Provider} from 'react-redux'
import './index.css';
const store = createStore(reducer,middleware);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
