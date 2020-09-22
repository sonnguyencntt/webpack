import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
 import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';



class Menu extends Component {
 
  menu = [
    {
      name : 'Tổng quan',
      to : '/',
      icon : 'fa fa-eye',

      exact : true,
    },
    {
      name : 'Hóa đơn',
      to : '/order',
      icon : 'fa fa-money',

      exact : false
    },
    {
        name : 'Bán hàng',
        to : '/pos',
        icon : 'fa fa-shopping-cart',

        exact : false
      },
      {
        name : 'Phòng / Bàn',
        to : '/table',
        icon : 'fa fa-table',

        exact : false
      },
      {
        name : 'Khách hàng / NCC',
        to : '/customer',
        icon : 'fa fa-users',

        exact : false
      },
      {
        name : 'Thực đơn',
        to : '/product',
        icon : 'fa fa-list-alt',

        exact : false
      },
      {
        name : 'Nhân viên',
        to : '/warehousing',
        icon : 'fa fa-truck',
      
        exact : false
      },
    
     
  ];
  // shouldComponentUpdate(nextProps, nextState)
  // {
  //   if(nextProps.preventDefault.link==this.props.preventDefault.link)
  //   {
  //     return false
  //   }
  //   return true;
  // }
  
   MenuLink = (label, to, activeOnlyWhenExact, index, icon, prevent)=>{
    return (
      <Route
      index = {index}
      path =  {to}
      exact = {activeOnlyWhenExact}
      children = {({match}) =>
      {
        var active  = match ? 'active_header' : '';
        return (
          <li  class="list-group-item " >
              
              
              
            <Link 
            class = {active} 
            //onClick = {(e)=>{this.checkPrevent(e,this.props.preventDefault,to)}}
            to = {to}
            ><i class= {icon} ></i>
            <span>&emsp; </span>
              {label}
            </Link>
          </li>
        );
      }}
      />
     
    )
  }
  // checkPrevent = (e,prevent,to) =>{
  //   if(prevent.link == to)
  //   {
  //     e.preventDefault();
  //   }
  //   else{
  //     return;
  //   }
  // }
  showMenus = (menu) =>
  {
      var result = null;
      if(menu.length > 0)
      {
        result = menu.map((menu, index) =>
        {
          return (
           this.MenuLink(menu.name, menu.to,menu.exact, index, menu.icon, menu.prevent)
          );
        });
      }
      return result;
  }
  render() {
    console.log('menu');
    return (
    
				<div class="sidebar sidebar-fixed " >
					<ul class="list-group">
          {this.showMenus(this.menu)}
						</ul>
				
		</div>
      
         
     
  

     
    );
  }
}
const  mapStateToProps = state =>{
  

  return{
  preventDefault : state.actionPrevent,
  


  }
};
export default connect(mapStateToProps,null)(Menu);
