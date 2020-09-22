import { combineReducers } from 'redux';


import bill from './data';

const appReducers = combineReducers({
  data : bill
});

export default appReducers;