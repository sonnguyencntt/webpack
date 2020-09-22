import  React  from 'react';

// import Customer from './pages/Customer/Customer';
import Order from './pages/Order/Order';
import Pos from './pages/Pos/Pos';
import Product from './pages/Product/Product';
import Table from './pages/Table/Table';
import WareHousing from './pages/WareHousing/WareHousing';
import Login from './pages/Login/Login';
import DashBoard from './pages/DashBoard/DashBoard';

import { createStore, applyMiddleware} from 'redux';
import appReducers_DashBoard from './reducers/Dashboard/index';
import appReducers_Order from './reducers/Order/index';




import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

function Create_Store(storeName, Component, reducer)
{
   
    storeName = createStore(
        reducer,  

        applyMiddleware(thunk) 
    ) 
    return ( <Provider store = {storeName}>
               <Component />
            </Provider>
    )

}

const Customer = React.lazy(() => import('./pages/Customer/Customer'));
const routes = [

    {
        path : '/' ,
          exact : true,
          
          main : () => <DashBoard/>
           },
  
  
    {
    path : '/customer' ,
    exact : false,
    main : () => <Customer/>
},
    {
        path : '/order' ,
        exact : false,
        icon : 'glyphicon glyphicon-home',
        main : () => <Order/>
    } ,
    {
        path : '/pos' ,
        exact : false,
        main : () => <Pos/>
    },
    {
        path : '/product' ,
        exact : false,
        main : () => <Product/>
    },
    {
        path : '/table' ,
        exact : false,
        main : () => <Table/>
    },
    {
        path : '/warehousing' ,
        exact : false,
        main : () => <WareHousing/>
    },
    {
        path : '/login' ,
        exact : false,
        main : () => <Login/>
    },

];
export default routes;