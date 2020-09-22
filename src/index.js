import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import appReducers from './reducers/App/index';
// window.jQuery = window.$ = require('../node_modules/jquery/dist/jquery.min');
// require('../node_modules/bootstrap/dist/js/bootstrap.min');
// import '../node_modules/jquery/dist/jquery.min';
//import '../node_modules/bootstrap/dist/js/bootstrap.min';

// import './App.css';
// window.jQuery = window.$ =  require('jquery/dist/jquery.min');

 const store = createStore(
  appReducers,
  applyMiddleware(thunk) 

)

ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider>

  ,
  document.getElementById('root')
);
export default store
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
