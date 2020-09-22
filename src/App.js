import React, { Component,Suspense } from 'react';
import routes from './routes'
import { BrowserRouter as Router, Route,Switch,HashRouter,IndexRoute } from 'react-router-dom';
import history from './history';
import Order from './pages/Order/Order';

class App extends Component {
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return (
          <Route
            key = {index}
            
            path = {route.path}
            exact = {route.exact}
            component = {route.main}
            
          />
        )
      })
    }
    
  return <Switch>{result}</Switch>
  }
  render() {
    console.log('sadasasfdashgggfhgfhgdd')
    return (
    
    <Router basename = "/" history = {history} >
       <Suspense fallback={<div>Loading...</div>}>
          {this.showContentMenus(routes)}
            
          </Suspense>
        
      </Router>
     
    );
  }
}

export default App;