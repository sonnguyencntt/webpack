import React, { Component } from 'react';









class Content extends Component {
  
 
   // console.log(this.props.history.match.params.id);
 
  render() 
  
  {
  
    return (
    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
<div class="row act">
	<div class="col-md-5">
    <h3 class="dashboard-title">DANH SÁCH Nhân Viên</h3>
	</div>
	<div class="col-md-7 text-right action">
		<button class="btn btn-success size-button" onclick="cms_addprodcut()"><i class="fa fa-plus" aria-hidden="true"></i> Thêm Nhân viên</button>
			</div>
</div>
<div class="row filter-search margin-search">
	<div class="col-md-5 form-group">
		<input type="text" name="txtproductname" placeholder="Nhập mã hoặc tên NV" class="form-control size-button"/>
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
								<th>Mã Nhân viên</th>

								<th>Tên Nhân viên</th>
								<th>Ngày sinh</th>
								<th>Địa chỉ</th>
								<th>SDT</th>
								<th>Ảnh</th>
								<th>Hành động</th>
								


							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>17520989</td>
								<td>Nguyen Hong Son</td>
								<td>11111</td>
								<td>LK-DN</td>
								<td>0123</td>
								<td></td>
								<td>
        
         
        <button type="button" 
        class="btn btn-primary"  ><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
        
        <button type="button" 
        class="btn btn-danger margin-button"
        ><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;Delete</button>
        
        

     
    </td>

							</tr>
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


export default Content;