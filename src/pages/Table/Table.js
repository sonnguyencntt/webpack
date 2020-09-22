import React, { Component } from 'react';
import Menu from './../../components/Menu/Menu';
import Header from './../../components/Menu/Header';
import Content from '../../components/Table/Content';
import {Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CheckAuth from  './../../authentication/checkauth'
import {connect} from 'react-redux';


// import $ from 'jquery';
// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';

 //for bootstrap.min.js
//bootstrap-theme file for bootstrap 3 only
// import './../../../bootstrap/dist/css/bootstrap-theme.min.css';
// import './../../../bootstrap/dist/css/bootstrap.min.css';
// import './../../../bootstrap/dist/js/bootstrap.min.js';






class Table extends Component {
  
  redirect_func = (data) =>{
    this.props.redirect_page({
      type : {
        redirect : {
          type : 'REDIRECT_PAGES',
          data : data
        }
      }
    })
  }

  componentWillMount(){
    if(this.props.redirect =='not_verfication' )
    {
     
      CheckAuth().then((data)=>{
        if(data == false)
        {
          return;
        }
        this.redirect_func(data);
      })
    }

   
   
  }
 
  
 
  render() 
  {
    console.log(this.props.redirect)

   if(this.props.redirect == 'not_verfication')
   {
     return <div></div>
   }
  if(this.props.redirect == false)
  {
    return <Redirect to={{
      pathname: '/login',
      
  }}
/>
  }
    
    return (
    
<div>
  
<Header/>

<div class="row sidebar-row">

<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 full-height"  >

			<Menu/>
	
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"  >



    </div>


	
</div>

<Content/>



</div>
</div>
   

   
    );
  }
  
}
const  mapStateToProps = state =>{
  
  console.log(state);
    return{
     redirect : state.redirect
  
    }
  };
  
  
  const mapDispatchToProps = (dispatch, props) =>{
    return {
      redirect_page : (tap) =>{
        dispatch(tap)
      },
      
    }
  }

    export default connect(mapStateToProps,mapDispatchToProps)(Table);