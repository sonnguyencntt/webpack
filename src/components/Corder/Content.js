import React, { Component } from 'react';
import Emty from './../Customer/Emty';
import * as action from '../../actions/index';

import {connect} from 'react-redux';

import axios from 'axios';
import Order from '../../pages/Order/Order';
import { withRouter } from "react-router-dom";



class Content extends Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { file: '' ,
						sea_idbill : '',
						position_body : 'hide-modal',
						from : '',
						to: '',
					ListtoShow : []};
		
	  }
 
	  
componentWillMount()
{
	this.props.fetchAllOrder()
}
searchforIdbill= (id)=>{
	this.props.search_bill_idbill(id)
}
show_bodyTable = (datas)=>{
	console.log(datas);
	var result = null;
	if(datas.length > 0)
	{
		console.log('okie')
		return result = datas.map((data,index) =>
		{
	
		
		return (
			<tr>
			<td>{data.idmenu}</td>
		 <td>{data.namemenu}</td>
		 <td>{data.quantity}</td>
		 <td>{data.unit}</td>
		 <td>{data.menu_price}</td>
			<td>{data.billdetail_price}</td>
	 </tr>	
		)
		})
	}
	else
	{
		return (
			<Emty/>
		  )
	}
	
}


showList = (id)=>{
	
	if(this.state.ListtoShow.length == 0)
	{
		var newlistArr = [...this.state.ListtoShow];
		var newlistArr_ = newlistArr.push(id)
		this.setState({ListtoShow : newlistArr});
		return
	}
	for(var i = 0; i<this.state.ListtoShow.length ; i++)
	{

		if(this.state.ListtoShow[i] == id)
		{
			var newlistArr = [...this.state.ListtoShow];
			var newlistArr_ = newlistArr.splice(i, 1);
			this.setState({ListtoShow : newlistArr});
			return;
		}
		if(i == this.state.ListtoShow.length -1)
		{
		var newlistArr = [...this.state.ListtoShow];
		var newlistArr_ = newlistArr.push(id)
		this.setState({ListtoShow : newlistArr});
		return;
		}
	}
}
	  showData = (datas) =>
	  {
	  var result = null;
	  var position  = '';
	  var icon = 'fa fa-plus-circle'

	
	  if(datas.length > 0)
	  {
		console.log('0')
		return result = datas.map((data,index) =>
		{
			if(this.state.ListtoShow.includes(data.IdBill))
			{
				position = '';
				icon = 'fa fa-minus-circle'
				
			}
			else
			{
				position = 'hide-modal'
				icon = 'fa fa-plus-circle'
			}
		var data_parseJson = JSON.parse(data.menu_detail);
		console.log(data_parseJson);
		  var statusName = (data.idStatus == 1) ? 'Đã hoàn thành'  : 'Chưa hoàn thành';
		  var statusClass = (data.idStatus == 1) ? 'success' : 'danger';
	   return (
   
		<React.Fragment>

		<tr class="not-detail">
			<td >
				<button onClick={()=>{
					this.showList(data.IdBill);
				}} style={{backgroundColor: "white"}}><i class={`${icon} text-success`}  aria-hidden="true"></i></button>
			</td>
	   <td>{data.id}</td>
			<td>{data.create_at}</td>
			<td>{data.Totalprice}</td>
			<td>{data.Note}</td>
			<td >
			<span class={`size label label-${statusClass}`}>
                {statusName}
             </span>
			</td>
		</tr>
		<tr >
			<td colspan="8" className = {position}>
				<ul >
					  <li class="nav-item">
						{/* <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin chi tiết</a> */}
						<h5 style={{color: "green"}}>Thông tin chi tiết</h5>
				  </li>
				</ul>
				<div >
				  <div>
					  <div class="row">
						<div class="col-md-4">
							<div class="row form-group">
								<label class="col-md-4">
									Mã hóa đơn
								</label>
								<div class="col-md-8">
									<strong>{data.IdBill}</strong>
								</div>
							</div>
							<div class="row form-group">
								<label class="col-md-4">
									Phòng/Bàn
								</label>
								<div class="col-md-8">
									<strong>{data.TableName}</strong>
								</div>
							</div>
							<div class="row form-group">
								<label class="col-md-4">
									Thời gian
								</label>
								<div class="col-md-8">
									<input type="text" name="" disabled="disabled" value={data.create_at} class="form-control" />
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="row form-group">
								<label class="col-md-4">
									Nhân Viên
								</label>
								<div class="col-md-8">
	   <strong>{data.name}</strong>
								</div>
							</div>
							<div class="row form-group">
								<label class="col-md-4">
									Khách hàng
								</label>
								<div class="col-md-8">
	   <strong>{data.CustomerName}</strong>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<textarea rows="4" class="form-control" value = {data.Note} disabled></textarea>
						</div>
					</div>
					  <table class="table table-striped table-bordered">
						<thead class="table-success">
							<tr>
							  <th>Mã Sản phẩm</th>
							  <th>Tên sản phẩm</th>
							  <th>Số lượng</th>
							  <th>ĐVT</th>
							  <th>Gía bán</th>
							  <th>Thành tiền</th>
							</tr>
						</thead>
						<tbody>
								{this.show_bodyTable(data_parseJson)}
						
						</tbody>
					</table>
				</div>
				</div>
			   </td>
		</tr>
		</React.Fragment>
		
		 );
		})
	  }
	  else
	  {
		return (
		  <Emty/>
		)
	  }
	 return result
	  };
  render() 
  
  {
  console.log('webpack');
  var state = this.state.file
    return (
    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
<div class="row customer-act act">
	<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
		<h3 class="dashboard-title">DANH SÁCH HÓA ĐƠN</h3>
	</div>
	<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 text-right action">
		<button onClick = {()=>{
			this.props.history.push("/pos")
		}} class="btn btn-primary size-button" onclick="cms_load_importware()"><i class="fa fa-desktop" aria-hidden="true"></i> Bán hàng</button>
		<button onClick = {()=>{
			 axios({
				url: 'query/exportfrombill', //your url
				method: 'POST',
				responseType: 'blob', 
				
			  }).then((response) => {
				 const url = window.URL.createObjectURL(new Blob([response.data]));
				 console.log(url)
				 const link = document.createElement('a');
				 link.href = url;
				 link.setAttribute('download', 'chitiethoadon' +'.xlsx'); //or any other extension
				 document.body.appendChild(link);
				 link.click();
			  });
		}}
		class="btn btn-success size-button"><i class="fa fa-sign-out" aria-hidden="true"></i> Xuất file</button>
	</div>
</div>
<div class="row filter-search margin-search">
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 form-group">
		<input onChange = {(e)=>{
			
				this.setState({sea_idbill : e.target.value},()=>{
					this.searchforIdbill({data : this.state.sea_idbill})
				})
			
		}} 
		type="text" name="txtwarehousing" class="form-control size-group" placeholder="Nhập mã phiếu nhập để tìm kiếm"/>
	</div>
	<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
		<div class="input-group flex">
			<input onChange = {(e)=>{
				this.setState({from : e.target.value})
			}} type="date" class="form-control size-group"/>
	        <div  className="from">
	          <span >Đến</span>
	        </div>
        	<input  onChange = {(e)=>{
				this.setState({to : e.target.value})
			}} type="date" class="form-control size-group" />
      	</div>
	</div>
	<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group">
		<button onClick = {()=>{
			this.props.acseachForDatetime({from : this.state.from,
			to:this.state.to})
		}} class="btn btn-primary size-button"><i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
		<button  onClick = {()=>{
				this.props.fetchAllOrder()

		}} class="btn btn-info size-button"><i class="fa fa-reply-all" aria-hidden="true"></i> Tất cả</button>
		
	</div>
	
</div>
<div class="row">
	<div class="col-md-12">
		<table class="table table-bordered" id="table-child-event">
            <thead class="table-primary">
                <tr>
                	<th></th>
                  	<th>Mã Hóa Đơn</th>
					<th>Thời gian</th>
                  	<th>Tổng tiền</th>
                  	<th>Ghi chú</th>
                  	<th>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
			{this.showData(this.props.data)}
	
            </tbody>
        </table>
	</div>
</div>
	
</div>
</div>

   
    );
  }
}
const mapDispatchToProps = (dispatch, props) =>{
	return {
	  
	  fetchAllOrder : (data) =>{
		dispatch(action.acFetchOrderRequest(data));
	   
	  },
	  search_bill_idbill : (id) =>{
		  dispatch(action.acSearchBillIdbill(id))
	  },
	  acseachForDatetime : (date) =>{
		  dispatch(action.acseachForDatetime(date))
	  },
	  
	 
	}
  }
const  mapStateToProps = state =>{
  console.log(state)
	return{
	 data : state.order.data
	}
  };
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Content));