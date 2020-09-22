import React, { Component } from 'react';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Menu/Header';
import Content from '../../components/Customer/Content';
import {Redirect} from 'react-router-dom';
import CheckAuth from  './../../authentication/checkauth'

import {connect} from 'react-redux';



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