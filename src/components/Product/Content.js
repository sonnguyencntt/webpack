import React, { Component } from 'react';

import * as action from '../../actions/index';
import {connect} from 'react-redux';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';









class Content extends Component {
  
	showData = (datas,id) =>
    {
    var result = null;
    if(datas.length > 0)
    {
      
      result = datas.map((data,index) =>
      {
        var statusName = (data.idStatus == 1) ? 'Đang sử dụng'  : 'Trống';
        var statusClass = (data.idStatus == 1) ? 'success' : 'default';
     return (
 
      <tr>
      <td>{index+1}</td>
    <td>{data.IdMenu}</td>
    <td>{data.NameMenu}</td>
    <td>
             
             {data.Price}
             
           </td>
    {/* <td>{data.idStatus}</td> */}
    <td>{data.Unit}</td>
    <td>{data.Idcate}</td>
	 <td >
		 <img style = {{width : '100px'}} src={data.Images} alt=""/>
	 </td>



    <td>
        
         
        <button type="button" 
        class="btn btn-primary"  ><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
        
        <button type="button" 
        class="btn btn-danger margin-button"
        ><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;Delete</button>
        
        

     
    </td>

  </tr>
      
      
       );
      })
    }
   
   return result
    };
 componentDidMount(){
	 this.props.fetchAllTables()
 }
  render() 
  
  {
  
    return (
    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
<div class="row act">
	<div class="col-md-5">
    <h3 class="dashboard-title">DANH SÁCH THỰC ĐƠN</h3>
	</div>
	<div class="col-md-7 text-right action">
		<button class="btn btn-success size-button" onclick="cms_addprodcut()"><i class="fa fa-plus" aria-hidden="true"></i> Thêm món ăn</button>
		<button class="btn btn-success size-button" data-toggle="modal" data-target="#AddCategoryModal"><i class="fa fa-th-list" aria-hidden="true"></i> Thêm danh mục</button>
	</div>
</div>
<div class="row filter-search margin-search">
	<div class="col-md-5 form-group">
		<input type="text" name="txtproductname" placeholder="Nhập mã hoặc tên sản phẩm" class="form-control size-button"/>
	</div>
	<div class="col-md-3 form-group">
		<select class="form-control size-button">
			<option>Đang kinh doanh</option>
			<option>Ngừng kinh doanh</option>
		</select>
	</div>
	<div class="col-md-2 form-group">
		<select class="form-control size-button">
			<option>Đồ ăn</option>
			<option>Thức uống</option>
		</select>
	</div>
	<div class="col-md-2 form-group">
		<button class="btn btn-primary size-button"><i class="fa fa-search" aria-hidden="true"></i> Tìm</button>
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
								<th>Mã sản phẩm</th>

								<th>Tên sản phẩm</th>
								<th>Gía</th>
								<th>Đơn vị tính</th>
								<th>Danh mục</th>
								<th>Ảnh</th>
								<th>Hành động</th>
								


							</tr>
						</thead>
						<tbody>
							{this.showData(this.props.menu)}
						</tbody>
					</table>
				</div>
				
		  </div>
	</div>
	
	</div>
	
	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		
		<ul class="pagination pagination-lg float-pagination">
			<li><a href="#">&laquo;</a></li>
			<li style = {{backgroundColor: 'red'}}><a href="#">1</a></li>
			<li><a href="#">&raquo;</a></li>
		</ul>
		
	</div>
	
</div>
	
</div>
</div>

   
    );
  }
}

const  mapStateToProps = state =>{
  
	console.log(state);
	  return{
	   menu : state.menu,
	  
	
	  }
	};
	
	
	const mapDispatchToProps = (dispatch, props) =>{
	  return {
		
		fetchAllTables : () =>{
		  dispatch(action.acFetchMenuRequest());
		 
		},
		
	  }
	}
export default connect(mapStateToProps,mapDispatchToProps)(Content);