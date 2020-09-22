import React, { Component, PureComponent } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import { connect } from 'react-redux';


import ListRoom from './ListRoom'
import * as action from '../../actions/index';






class Room extends Component {
	shouldComponentUpdate(nextProps, nextState)
	{
   if(nextProps.search.onSearch == this.props.search.onSearch )
		{
      return false;
    }
    return true;
	}

	  onChange = (event, callback) =>{
		var target = event.target;
		var value = target.value;
		this.props.onChangeSearch({type : {
			inputsearch : {
				type : 'CHANGE_ROOM_NAME_SEARCH',
				data : value
			}
		}})
		// if(callback)
		// {
		// 	setTimeout(()=>{callback({name : this.props.search.onSearch})}, );
			
		// }
		if(callback){
			setTimeout(callback,)
		  }
   
	}
	
	
  render() 
  {
	
    return (
    <div>
         <div class="row filter-search margin-search">
	<div class="col-md-5 form-group">
		<input 
		type="text" 
		name="name"
		 value = {this.props.search.onSearch}
		 onChange = {(e) =>{this.onChange(e, ()=>{
			 this.props.onsearchRoom({name : this.props.search.onSearch,
			type : 'ROOM'})
		 })}}
		placeholder="Nhập mã hoặc tên phòng" 
		class="form-control size-group"/>
	</div>

	<div class="col-md-3 form-group">
		<button class="btn btn-primary size-group disabled " disabled><i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
	</div>
	
</div> 
{/* <div class="row filter-search margin-search">
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
		<input type="text" name="txtwarehousing" class="form-control size-group" placeholder="Nhập mã phiếu nhập để tìm kiếm"/>
	</div>
	<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		<div class="input-group flex">
			<input type="date" class="form-control size-group"/>
	        <div  className="from">
	          <span >Đến</span>
	        </div>
        	<input type="date" class="form-control size-group" />
      	</div>
	</div>
	<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">
		<button class="btn btn-primary size-button"><i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
	</div>
	
</div> */}
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
								<th>Mã Phòng / Tầng</th>
                                <th>Tên Phòng / Tầng</th>
								<th>Hành Động</th>

							</tr>
						</thead>

							
								<ListRoom/>
							
					
					</table>
				</div>
				
		  </div>
	</div>
	
	</div>
	
	
	
</div> 
</div>
    );
  }
}

const  mapStateToProps = state =>{

  
	return{
	 search : state.table.formroom
	}
  };
const mapDispatchToProps = (dispatch, props) =>{
	
  return {
	onsearchRoom : (id) =>{
	  dispatch(action.acSearchRoomsRequest(id))
	},
	onChangeSearch : (id) =>{
		dispatch(id)
	}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Room);