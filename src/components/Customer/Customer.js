import React, { Component } from 'react';
import * as Types from './../../constants/ActionType'

import { connect } from 'react-redux';
//import {acFetchTableRequest, acDeleteProductsRequest} from './../../actions/index';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';

import Listcustomer from './ListCustomer';
import ListPagination from  './ListPagination_C'
import * as action from '../../actions/index';



class Table extends Component {
// 	shouldComponentUpdate(nextProps, nextState)
// 	{
//    if((JSON.stringify(nextProps.status)== JSON.stringify(this.props.status)) && (JSON.stringify(nextProps.room)== JSON.stringify(this.props.room))
//    && (this.props.event.table == nextProps.event.table) && (this.props.event.room == nextProps.event.room) &&(this.props.event.status == nextProps.event.status)
//    )
// 		{
//       return false;
//     }
//     return true;
// 	}
	  ListStatus = (listArray) =>{
		var result  = null;
		if(listArray.length > 0){
		  result = listArray.map((status, index) =>{
			return (
			<option value={status.Id_stt}>{status.name}</option>
			)
		  })
		}
		return result;
	  }
	  ListRoom = (listArray) =>{
		var result  = null;
		if(listArray.length > 0){
		  result = listArray.map((room, index) =>{
			return (
			<option value={room.IdArea}>{room.BranchName}</option>
			)
		  })
		}
		return result;
	  }
   
	  onChange = (object, callback)=>{
		  this.props.onChangeTable(object)
		 
		  if(callback){
			setTimeout(callback,)
		  }

	  }
  render() 
  
  {
     console.log('table')
  
    return (
    <div>
         <div class="row filter-search margin-search">
	<div class="col-md-5 form-group">
		<input type="text" name="txtproductname" 
		value = {this.props.form.id_name_search_customer}
		onChange = {(e)=>{
			this.onChange({type :{
				onchange_id_name_search_customer :{
					type :Types.CHANGE_ID_NAME_SEARCH_CUSTOMER,
					text : e.target.value
				},
				
			}}, ()=>{
				this.props.fetchAllTables({index : 1,
					id : this.props.form.id_name_search_customer,
                    debit : Number(this.props.form.debit_search_customer),
                         
				type : 'CUSTOMER'})
		  
									})
			

		}} placeholder="Nhập mã hoặc tên nhà cung cấp" class="form-control size-group"/>
	</div>
	<div class="col-md-2 form-group p-0">
		<select
	

		value = {this.props.form.debit_search_customer}
		onChange = {(e)=>{
			this.onChange({type :{
				onchange_debit_search_customer :{
					type : Types.CHANGE_DEBIT_SEARCH_CUSTOMER,
					text : e.target.value
				}
			}}, ()=>{
				this.props.fetchAllTables({index : 1,
					id : this.props.form.id_name_search_customer,
                    debit : Number(this.props.form.debit_search_customer),
                         
				type : 'CUSTOMER'})
		  
									})
		

		}}
		 class="form-control size-group"    >
						<option value = '0'>Tất cả</option>

						<option value = '1'>Còn nợ</option>

		</select>
	</div>
	
	<div class="col-md-3 form-group">
		<button class='btn btn-primary size-group'  
	disabled>
		<i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
		

	</div>
</div> 

<div class="row">
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-table">
	
	<div class="panel panel-primary set-border">
		  <div class="panel-heading set_typecolor">
				<h3 class="panel-title">Thông Tin</h3>
		  </div>
		  <div class="panel-body">
				
				<div class="table-responsive">
					<table class="table table-bordered table-hover">
						<thead>
						
							<tr>
								<th>STT</th>
								<th>Mã Khách Hàng</th>
                                <th>Tên Khách Hàng</th>
								<th>Số Điện Thoại</th>
								<th>Email</th>

								<th>Địa Chỉ</th>
								<th>Ngày Sinh</th>
								<th>Ghi Nợ</th>
								<th>Ảnh Đại Diện</th>
								<th>Chú Thích</th>
								<th>Hành Động</th>


							</tr>
						
						</thead>
						<Listcustomer/>
					</table>
				</div>
				
		  </div>
	</div>
	
	</div>
	
	
	<ListPagination/>
</div> 
</div>
    );
  }
}

  

const  mapStateToProps = state =>{
  
	return{
	  event : state.customer.event,
	  room : state.customer.rooms,
	  form : state.customer.form_onChange,
	  status : state.customer.stttable

	}
  }
  
  
  const mapDispatchToProps = (dispatch, props) =>{
	return {
		fetchAllTables : (index) =>{
			dispatch(action.acFetchCustomerRequest(index));
		   
		  },
	  onChangeTable : (object) =>{

		dispatch(object);
	  },
	  onSearchTable : (object,index) =>{

		dispatch(action.acSearchTablesRequest(object,index));
	  },
	 
	  changefornavigation : (index) =>{
		dispatch(index)
	  }
	}
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Table);