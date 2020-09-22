import React, { Component } from 'react';
import Header from './../../components/Pos/Header';
import Tabs from '../../components/Pos/Tabs';
import Payment from '../../components/Pos/Payment';
import * as action from '../../actions/index';
import {connect} from 'react-redux';
import * as Feature from './../../actions/pos/feature'
import * as actionPos from '../../actions/pos';
import Confirm from '../../components/Pos/Confirm'








class Pos extends Component {
  constructor(props){
    super(props);
    this.state = {
		showButtonCustomer : {
			display : 'none',
		},
	}
  }
  totalPrice = (list) =>{
	  var total = 0
	  for(var i =0; i<list.length ; i++)
	  {
		  total = Number(list[i].TotalPrice) + Number(total)
	  }
	  return total;

  }
 changeQuantity = (id, value, list, guestMoney) =>{
	var newValue = Feature.changequantity(id , value, list);
	var totalPrice = this.totalPrice(newValue);
	var extraMoney = Number(guestMoney) - Number(totalPrice);
	this.props.changeQuantity({
		
			type : {
			   
				feature_appendmenu : {
					type : 'FEATURE_APPENDMENU',
					data : newValue
				  },
				  payment_total: {
					type : 'PAYMENT_TOTAL',
					data : totalPrice
				  },
				  extra_money: {
					type : 'EXTRA_MONEY',
					data : extraMoney
				  },
			  },
			  
		}
	)
 }
 deleteMenu = (id, list, guestMoney) =>{
	
	var newValue = Feature.deleteMenu(id ,  list);
	var totalPrice = this.totalPrice(newValue);
	var extraMoney = Number(guestMoney) - Number(totalPrice);

	this.props.changeQuantity({
		
			type : {
			   
				feature_appendmenu : {
					type : 'FEATURE_APPENDMENU',
					data : newValue
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
		}
	)
 }


 showCustomer = (customers, id) =>
  {
  var result = null;
  var style = {width : '100px'}
  if(customers.length > 0)
  {
	
	result = customers.map((customer,index) =>
	{
	  
		return (

			<tr style = {{display : 'flex',backgroundColor:'#90ceb9'}}>
				<td>{index+1}</td>
			<td style = {
				{
					width : '120px',
    				wordWrap: 'break-word'
				}
			}
		> {customer.CustomerName}</td>
			<td style = {{
				width: '90px',
				wordBreak: 'break-word'
			}}>{customer.PhoneNumber}</td>
			<td style = {{
				width: '90px'
			}} class="img-product">
			<img  style = {{borderRadius: '10px',
								width: '70px',
								height: '70px'}}
		src = {customer.Avatar} alt=""/>							</td>
		<td ><i onClick = {()=>{
			
			this.appendCustomer(customer.IdCustomer , this.props.feature.search_customer)
		}} style = {{   	 fontSize: '25px',
		color: 'green',
		cursor: 'pointer',
		transition: 'transform 0.2s ease 0s',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex'
		}}
		class="fa fa-plus-circle hover-pos-del"></i></td>
		
			</tr>
			
			 );
	})
  }
 return result

  };
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
appendCustomer = (id, list) =>{
	var appendData = Feature.appendCustomer(id, list, this.props.feature.show_customer);

	if(appendData == true)
	{
		return;
	}
	


	this.props.append_customer({
		type : {
		   
			show_customer_pos : {
				type : 'SHOW_CUSTOMER_POS',
				data : appendData
			  },
			 
		  }
	})
}
deleteCustomer = ()=>{
	this.props.append_customer({
		type : {
		   
			show_customer_pos : {
				type : 'SHOW_CUSTOMER_POS',
				data : {}
			  },
			 
		  }
	})
}
  showTableCustomer = (customer, id) =>
  {
  var result = null;
  var style = {width : '100px'}
  if(typeof customer.IdCustomer != 'undefined')
  {
	
	
	return (

		<tr >
		<td>1</td>
	
	   <td>{customer.IdCustomer}</td>
	   <td>{customer.CustomerName}</td>
	   <td>{customer.PhoneNumber}</td>
	   <td>{customer.Address}</td>
	
	
	
			<td class="text-center">
			<button 
			onClick = {(e)=>{
				this.deleteCustomer()
			}}
			style = {{backgroundColor : 'white'}}
			><i style = {{fontSize: '25px',
	color: 'red',transition: 'transform .2s'}} class="fa fa-times-circle hover-pos-del"></i></button>
			
		</td>
	</tr>
		
		
		 );
  }
 
 return result
  };
  showMenu = (menus, id) =>
  {
  var result = null;
  var style = {width : '100px'}
  if(menus.length > 0)
  {
	
	result = menus.map((menu,index) =>
	{
	  
   return (

	<tr >
	<td>{index+1}</td>

   <td>{menu.NameMenu}</td>
	<td><div class="input-group spinner" style = {{position: 'unset !important'}}>
			<button  onClick = {(e)=>{
				this.changeQuantity(menu.IdMenu, Number(menu.Quantity) - 1, this.props.feature.show_list_table, this.props.feature.guest_money )
			}} style = {{width : "15%", float : "left",borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px'}} class=" btn btn-default"><i class="fa fas fa-minus"></i></button>
			<input onChange = {(e)=>{
				this.changeQuantity(menu.IdMenu, e.target.value, this.props.feature.show_list_table,this.props.feature.guest_money)
			}}  style = {{width : "70%", zIndex : "0"}} type="number" class="form-control quantity-product-oders" name="" defaultValue={menu.Quantity} value = {menu.Quantity}/>
			<button onClick = {(e)=>{
				this.changeQuantity(menu.IdMenu, Number(menu.Quantity) + 1, this.props.feature.show_list_table,this.props.feature.guest_money)
			}} style = {{width : "15%",borderTopRightRadius: '5px',borderBottomRightRadius: '5px'}} class=" btn btn-default"><i class="fa fas fa-plus"></i></button>
		</div></td>
	<td><input type="text" class="form-control price-order" disabled="disabled" name="" value={menu.Price}/></td>
   <td class="text-center total-money">{menu.TotalPrice}</td>
	<td class="text-center">
		<button 
		onClick = {(e)=>{
			this.deleteMenu(menu.IdMenu, this.props.feature.show_list_table,this.props.feature.guest_money)
		}}
		style = {{backgroundColor : 'white'}}
		><i style = {{fontSize: '25px',
color: 'red',transition: 'transform .2s'}} class="fa fa-times-circle hover-pos-del"></i></button>
		
	</td>
</tr>
	
	
	 );
	})
  }
 
 return result
  };
  componentWillReceiveProps(nextProps)
  {
	console.log('will');

	  if(JSON.stringify(this.props.feature.search_customer) != JSON.stringify(nextProps.feature.search_customer))
	  {
		  console.log('json')
		if(nextProps.feature.search_customer.length > 0)
		{
			console.log('json1')
		  var newstate = {...this.state.showButtonCustomer}
		  newstate.display  = null
		  this.setState({showButtonCustomer : newstate}
		  )
		  console.log('sau khi setstate');
		}
		else
		{
		  var newstate = {...this.state.showButtonCustomer}
		  newstate.display  = 'none'
		  this.setState({showButtonCustomer : newstate})
		}
	  }
	 
  }
  render() 
  
  {
	  console.log('re-render')
    return (
    <div>
      
      
     <div>
      <Header/>
	  <Confirm/>
     </div>
    
     <div class="container-fluid margin-content">
     <div class="row content">

      <Tabs/>
      <div class="col-md-6 content-listmenu" id="content-listmenu">
				<div class="row" id="bill-info">
					
						<div class="col-md-12 p-0 input-group flex" style = {{display : 'flex'}}>
							
							<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
								<span style = {{
									fontSize: '30px',
									fontFamily: 'cursive',
									color: 'mediumvioletred',
								}}>{this.props.feature.show_table.TableName}</span>
							</div>
							
							
							<div style = {{position: 'relative'}} class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
							<input
							onChange = {(e)=>{
								console.log(e.target.value.length);
								
								
								
								this.props.search_customer({data : e.target.value})
								
							}}
							 style = {{width :'100%'}} type="text " id="customer-infor" placeholder="Tìm khách hàng" class="form-control "/>
    							{/* <div id="result-customer"></div>
							<span class="del-customer"></span> */}
							<div 
							// style = {{position: 'fixed',
							// 				width: '35.5%',
							// 				backgroundColor: '#e9e6e6',
							// 				marginTop: '10px',
							// 				zIndex : '1',
							// 				/* border-radius: 10px; */
							// 				paddingTop: '0px'}}
							>
							<table style = {{
								width: 'auto',
								marginBottom: '0px',
								position: 'fixed',
								right: '15px',
								// backgroundColor: '#cebfbf',
								/* overflow-y: scroll; */
								/* display: block; */
								right: '15px',
								bottom: '15px',
								zIndex: '1'
							}} class="table table-hover table-pos" >
					
						<tbody 
						style = {{
							overflowY: 'scroll',
							display: 'block',
							// borderRadius: '20px',
    						maxHeight: '350px',

						}}
						>
						
							
						{this.showCustomer(this.props.feature.search_customer)}
							
						
												</tbody>
						
						<tfoot style = {this.state.showButtonCustomer}>
						<td 
						style = {{
							borderTop: '2px solid rgb(224, 216, 216)',
							backgroundColor: 'rgb(144, 206, 185)',
							borderBottomLeftRadius: '20px'
						}}
						colSpan = {5} >
						<button onClick = {()=>{
							this.props.searchDefault_customer({type : {
           
								search_customer_pos : {
									type : 'SEARCH_CUSTOMER_POS',
									data : []
								  }
							  }})
						}}
						style = {{    
							borderRadius: '5px',
							float: 'right',
							/* border: 1px solid rgb(246, 243, 243); */
							backgroundColor: '#B71C1C',
						}}
						 type="button" class="btn btn-danger" ><i class="fa fa-close" aria-hidden="true"></i>&nbsp;&nbsp;Đóng</button>
	
						</td>
						</tfoot>
					</table>
							</div>
							
							
							</div>
							
						</div>
					
				</div>
				<div style = {{
					marginBottom : '10px'
				}} class="panel panel-primary set-border">
		  <div class="panel-heading set_typecolor">
				<h3 class="panel-title">Thông tin khách hàng</h3>
		  </div>
		  <div class="panel-body">
				
				<div style = {{
					height : '100px'
				}} class="table-responsive bill-detail-content">
					<table class="table table-hover table-bordered" >
						<thead style = {{backgroundColor : '#bebaba'}}>
						<tr>
							<th>STT</th>
						      <th >Mã khách hàng</th>

						      <th >Tên khách hàng</th>
						      <th >SĐT</th>
						      <th scope="col">Địa chỉ</th>
						     <th></th>
						    </tr>
						</thead>
						<tbody>
						{this.showTableCustomer(this.props.feature.show_customer)}
						</tbody>
					</table>
				</div>
				
		  </div>
	</div>
				<div class="panel panel-primary set-border">
		  <div class="panel-heading set_typecolor">
				<h3 class="panel-title">Danh sách sản phẩm</h3>
		  </div>
		  <div class="panel-body">
				
				<div style = {{
					height : '240px'
				}} class="table-responsive bill-detail-content">
					<table class="table table-hover table-bordered" >
						<thead style = {{backgroundColor : '#bebaba'}}>
						<tr>
						      <th >STT</th>

						      <th >Tên sản phẩm</th>
						      <th >Số lượng</th>
						      <th scope="col">Gía bán</th>
						      <th scope="col">Thành Tiền</th>
						      <th scope="col"></th>
						    </tr>
						</thead>
						<tbody>
					{this.showMenu(this.props.feature.show_list_table)}
						</tbody>
					</table>
				</div>
				
		  </div>
	</div>
				
				<Payment/>
			</div>
			</div>
	</div>
     

      
    </div>

   
    );
  }
}

const  mapStateToProps = state =>{
  
	return{
	feature : state.pos
	}
  };
  
  
  const mapDispatchToProps = (dispatch, props) =>{
	return {
	  changeQuantity : (action) =>{
		  dispatch(action)
	  },
	  extraMoney : (action) =>{
		dispatch(action)
	},
	search_customer : (data) =>{
		dispatch(actionPos.acSearchCustomerPos(data))
	},
	searchDefault_customer : (action) =>{
		dispatch(action)
	},
	append_customer :  (action) =>{
		dispatch(action)
	},
	confirm : (action) =>{
		dispatch(action)
	}
	}
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Pos);