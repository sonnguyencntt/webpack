import React, { Component } from 'react';
import * as actionPos from '../../actions/pos';

import * as action from '../../actions/pos';
import {connect} from 'react-redux';
import * as Feature from './../../actions/pos/feature'
import Alert from './../Table/Alert';
import { withRouter } from "react-router-dom";


///////







///////////
class Header extends Component {
	constructor(props) {
		super(props);
	  
		this.state = {
		 search : '',
		};
	  }
	  totalPrice = (list) =>{
		var total = 0
		console.log(list)
		for(var i =0; i<list.length ; i++)
		{
			total = Number(list[i].TotalPrice) + Number(total)
		}
		return total;
  
	}
	  appendTable = (id, guestMoney) =>{
		var appendData = Feature.append(id, this.props.search_menu.search_menu, this.props.search_menu.show_list_table);

		if(appendData == true)
		{
			return;
		}
		var oldData = [...this.props.search_menu.show_list_table]
		console.log(oldData)
		var pushToArray = oldData.push(appendData);
		var totalPrice = this.totalPrice(oldData);
		var extraMoney = Number(guestMoney) - Number(totalPrice);
	
	
		this.props.append_Data({
			type : {
			   
				feature_appendmenu : {
					type : 'FEATURE_APPENDMENU',
					data : oldData
				  },
				  payment_total: {
					type : 'PAYMENT_TOTAL',
					data : totalPrice
					},
					extra_money: {
					  type : 'EXTRA_MONEY',
					  data : extraMoney
					  },
			  }
		})
	}
   // console.log(this.props.history.match.params.id);
   showmenu = (menus, id) =>
    {
    var result = null;
    var style = {width : '100px'}
    if(menus.length > 0)
    {
      
      result = menus.map((menu,index) =>
      {

		if(typeof menu.non_Query != "undefined")
		{
			return;
		}
		else
		{
			return (
 
				<div onClick = {()=>{
					this.appendTable(menu.IdMenu, this.props.search_menu.guest_money)
				}} class="container-fluid style-of-container menu_hover" onMouseOver = {()=>{console.log('1')}} style = {
					{
					border: "1px solid #ddd",
					paddingRight : '0px',
					paddingLeft  : '0px',
					backgroundColor : 'white',
					cursor: 'pointer',
					display:'flex',
					
				
				}
					
					}>
		<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7" style = {{
		marginTop : 'auto',
		marginBottom : 'auto'
		}}>
		<span style = {{fontSize : '18px'}}>{menu.NameMenu}</span>	
		
		</div>
		
		<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style = {{marginTop : 'auto',
		marginBottom : 'auto'}}>
		<img style={{    
		height: '60px',
		width: '60px',
		marginTop: '5px',
		marginBottom: '5px',
		float : "right",
		borderRadius: '5px'}} src={menu.Images} alt=""/>
		
		</div>
		</div>
			  
			  
			   );
		}
    
      })
	}
	else
	{
		
			return(
				<div class="container-fluid style-of-container menu_hover" onMouseOver = {()=>{console.log('1')}} style = {
					{
					border: "1px solid #ddd",
					paddingRight : '0px',
					paddingLeft  : '0px',
					backgroundColor : 'white',
					cursor: 'pointer',
					display:'flex',
					
				
				}
					
					}>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style = {{
		marginTop : 'auto',
		marginBottom : 'auto',
		height : '40px'
		}}>
		<span style = {{fontSize : '18px'}}>Not result for search</span>	
		
		</div>
		
		
		</div>
			)
		
		
		
	}
   
   return result
	};
	
	searchMenu = (data)=>{
		// if(data == '')
		// {
		// 	this.props.valueDefaultNull({
		// 		type : {
           
		// 			get_list_forsearchMenu : {
		// 				type : 'GET_LIST_FEATURE_SEARCH_MENU',
		// 				data : []
		// 			  }
		// 		  }
		// 	})
		// 	return;
		// }
		this.props.searchForMenu({data : data})
	}
	componentWillMount()
	{
this.props.getUser();
	}
  render() 
  
  {
	  console.log(this.props.search_menu)
    return (
     
		<div className="position-fixed">
			          <Alert/>

		 	<div id="topsidebar">
	   <nav class="navbar navbar-color" role="navigation">
		   <div class="navbar-header">
			   <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				   <span class="sr-only color">Toggle navigation</span>
				   <span class="icon-bar color"></span>
				   <span class="icon-bar color"></span>
				   <span class="icon-bar color"></span>
			   </button>
			   <a class="navbar-brand text-color" href="#">Quản Lý Quán Cà Phê</a>
		   </div>
	   
		   <div class="collapse navbar-collapse navbar-ex1-collapse">
			  
			   <div class="navbar-form navbar-left bill_Search" role="search" >
				   <div class="form-group" style = {{marginLeft : '310px',width : '400px'}  }>
					   {/* <input  type="text" class="form-control search input-size" placeholder="Nhập Tên Mặt Hàng"/> */}
					   
					   <input onChange = {(e)=>{
							this.searchMenu(e.target.value);
						   
					   }}  type="text" id="myInput" class="form-control " onkeyup="myFunction()" placeholder="Search for names.."
					   />


<div class="container-fluid child-of-listmenu"
								style = {
									{
									paddingRight : '0px',
									paddingLeft  : '0px',
									position: 'fixed',
   									 width: '400px',
								}
									
									}
>


{this.showmenu(this.props.search_menu.search_menu)}


</div>



				   </div>
				  
			   </div>
			   <ul class="nav navbar-nav navbar-right">
				  
				   <li onClick = {(e)=>{
					   e.preventDefault();
						this.props.history.push("/order")
				   }} class="dropdown " >
					   <a className="text-size text-color" href="#" >Quay lại <b class="fa fa-arrow-left"></b></a>
					  
				   </li>
			   </ul>
		   </div>
	   </nav>
	   </div>
	   </div>
   
    );
  }
}
const  mapStateToProps = state =>{
  
	return{
	 search_menu : state.pos
	}
  };
  
  
  const mapDispatchToProps = (dispatch, props) =>{
	return {
	  
	  searchForMenu : (data) =>{
		dispatch(action.searchForMenuOnRequest(data));
	   
	  },
	  valueDefaultNull : (action) =>{
		  dispatch(action)
	  },
	  append_Data : (action) =>{
        dispatch(action)
      },
	 getUser : () =>{
		 dispatch(actionPos.getUser())
	 }
	}
  }
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));