import React, { Component } from 'react';

import Chart from '../Chart/Chart';
import {connect} from 'react-redux';
import * as action from '../../actions/index';

class Content extends Component {
  
	constructor(props){
		super(props);
		this.state = {
		 dateNow : '00/00/0000 hh:ss PM',
		 
		}
		} 
		
 componentWillMount(){
	
	var today = new Date();
var now = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	 this.setState({dateNow : now}, ()=>{
		  this.props.fetchAllDashboard({date : today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()})
	 })
 }
  render() 
  
  {
  
    return (
    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 
 <div class="row">
	 
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	<h3 class="dashboard-title">BÁO CÁO KẾT QUẢ BÁN HÀNG HÔM NAY : Ngày {this.state.dateNow}</h3>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		<div class="resport-box resport-blue">
			<div class="resport-icon">
				<i class="fa fa-usd" aria-hidden="true"></i>
			</div>
			<div class="resport-data">
				
				
				<span>Tổng doanh thu   </span>
				<strong> <h4 >
	<span >{this.props.total_revenue}</span>	
				</h4></strong>
				<p>Tổng số hóa đơn</p>
	<h4><span >{this.props.count_bill}</span></h4>
			</div>
		</div>
	</div>
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		<div class="resport-box resport-red">
			<div class="resport-icon">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
			<div class="resport-data">
				<p>Tổng hóa đơn đang nợ</p>
				<h4 >
	<span >{this.props.total_debit_bill}</span>				</h4>
	<p>Thành tiền</p>
	<h4><span >{this.props.sum_debit_bill}</span></h4>
			</div>
		</div>
	</div>
	<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
		<div class="resport-box resport-green">
			<div class="resport-icon">
				<i class="fa fa-pencil" aria-hidden="true"></i>
			</div>
			<div class="resport-data">
				<p><span></span>Tổng hóa đơn chưa thanh tóan</p>
				<h4>
	<span >{this.props.count_unpaid_bill}</span>				</h4>
				<p>Thành tiền</p>
	<h4><span >{this.props.total_unpaid_bill}</span></h4>
			</div>
		</div>
	</div>
	
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    
    <Chart/>
    
	</div>
	
</div>
</div>

</div>

   
    );
  }
}

const  mapStateToProps = state =>{
	console.log(state)
	return{
	 
		total_revenue : state.dashboard.total_revenue,
		count_bill : state.dashboard.count_bill,
		total_debit_bill : state.dashboard.total_debit_bill,
		sum_debit_bill : state.dashboard.sum_debit_bill,
		count_unpaid_bill :state.dashboard.count_unpaid_bill,
		total_unpaid_bill : state.dashboard.total_unpaid_bill

	}
  }
  
  const mapDispatchToProps = (dispatch, props) =>{
	return {
	  fetchAllDashboard : (index) =>{
		  dispatch(action.acFetchDashboardRequest(index));
		 
		},
	 
	}
	}

export default connect(mapStateToProps,mapDispatchToProps)(Content); 