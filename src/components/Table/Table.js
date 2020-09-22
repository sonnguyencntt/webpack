import React, { Component } from 'react';

import { connect } from 'react-redux';
//import {acFetchTableRequest, acDeleteProductsRequest} from './../../actions/index';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';

import Listtable from './ListTable';
import ListPagination from  './ListPagination'
import * as action from '../../actions/index';



class Table extends Component {
	shouldComponentUpdate(nextProps, nextState)
	{
   if((JSON.stringify(nextProps.status)== JSON.stringify(this.props.status)) && (JSON.stringify(nextProps.room)== JSON.stringify(this.props.room))
   && (this.props.event.table == nextProps.event.table) && (this.props.event.room == nextProps.event.room) &&(this.props.event.status == nextProps.event.status)
   )
		{
      return false;
    }
    return true;
	}
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
		value = {this.props.event.table}
		onChange = {(e)=>{
			this.onChange({type :{
				onchange_table :{
					type : 'ONCHANGE_TABLE',
					text : e.target.value
				}
			}}, ()=>{
				this.props.fetchAllTables({index : 1,
					room: this.props.event.room,
					table: this.props.event.table,
					status: this.props.event.status,
				type : 'TABLE'})
		  
									})
		

		}} placeholder="Nhập mã hoặc tên bàn" class="form-control size-group"/>
	</div>
	<div class="col-md-2 form-group p-0">
		<select
		value = {this.props.event.room}
		onChange = {(e)=>{
			this.onChange({type :{
				onchange_room :{
					type : 'ONCHANGE_ROOM',
					text : e.target.value
				}
			}}, ()=>{
				this.props.fetchAllTables({index : 1,
					room: this.props.event.room,
					table: this.props.event.table,
					status: this.props.event.status,
				type : 'TABLE'})
		  
									})
			

		}}
		 class="form-control size-group"    >
						<option value = ''>Tất cả</option>

						{this.ListRoom(this.props.room)}
		</select>
	</div>
	<div class="col-md-2 form-group ">
		<select 
		onChange = {(e)=>{
			this.onChange({type :{
				onchange_status :{
					type : 'ONCHANGE_STATUS',
					text : e.target.value
				}
			}}, ()=>{
				this.props.fetchAllTables({index : 1,
					room: this.props.event.room,
					table: this.props.event.table,
					status: this.props.event.status,
				type : 'TABLE'})
		  
									})
			

		}}
		value = {this.props.event.status} class="form-control size-group" >
			<option value ='' >Tất cả</option>
			{this.ListStatus(this.props.status)}

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
					<table class="table table-hover">
						<thead>
							<tr>
								<th>STT</th>
								<th>Mã Bàn</th>
								<th>Tên bàn</th>
								<th>Trạng thái</th>
								<th>Phòng, Tầng</th>
								<th>Hóa Đơn</th>
								<th>Hành Động</th>


							</tr>
						</thead>
						<Listtable/>
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
	  event : state.table.event,
	  room : state.table.rooms,
	  
	  status : state.table.stttable

	}
  }
  
  
  const mapDispatchToProps = (dispatch, props) =>{
	return {
		fetchAllTables : (index) =>{
			dispatch(action.acFetchTableRequest(index));
		   
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