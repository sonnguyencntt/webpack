import { combineReducers } from 'redux';

import table from './Table/index';
import customer from './Customer/index';
import dashboard from './dashboard/index';
import order from './Order/index';

import chart from './dashboard/chart';
import * as redirect from './redirect';
import pos from './Pos'
import menu from './menu';
import { filterActions } from 'redux-ignore'; 
const appReducers = combineReducers({
   table,
   customer, 
   dashboard,
   chart,
   order,
   pos,
   redirect : redirect.redirect,
   user : redirect.User,
   menu,
});

export default appReducers;