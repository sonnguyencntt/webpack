import React from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import { Fragment } from "react";

class Printdata extends React.Component {

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
    <Fragment>
	<tr >
	<td>{index+1}</td>

   <td>{menu.NameMenu}</td>
	<td><div class="input-group spinner" style = {{position: 'unset !important'}}>
			<button style = {{width : "15%", float : "left",borderTopLeftRadius: '5px',borderBottomLeftRadius: '5px'}} class=" btn btn-default"><i class="fa fas fa-minus"></i></button>
			<input style = {{width : "70%", zIndex : "0"}} type="number" class="form-control quantity-product-oders" name="" defaultValue={menu.Quantity} value = {menu.Quantity}/>
			<button style = {{width : "15%",borderTopRightRadius: '5px',borderBottomRightRadius: '5px'}} class=" btn btn-default"><i class="fa fas fa-plus"></i></button>
		</div></td>
	<td><input type="text" class="form-control price-order" disabled="disabled" name="" value={menu.Price}/></td>
   <td class="text-center total-money">{menu.TotalPrice}</td>
	
    
</tr>

</Fragment>
	
	 );
	})
  }
 
 return result
  };
  render() {
    return (
        <div>
            <h1 style = {{textAlign : 'center'}}>Thông tin hoá dơn</h1>
            <br/>
            <br/>
            Nhân viên : <span> {this.props.customer.name} </span>
            <br/>
            <br/>
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
                    <br/>
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
    <tr>
    <td colSpan = '2'>Tổng tiền</td>
    <td colSpan = '3' style = {{textAlign : 'end'}}>{this.props.feature.payment_total} </td>
    
    
</tr>
<tr>
<td colSpan = '2'>Khách đưa</td>
    <td colSpan = '3' style = {{textAlign : 'end'}}>{this.props.feature.guest_money}</td>
</tr>
<tr>
<td colSpan = '2'>Tiền thừa</td>
    <td colSpan = '3' style = {{textAlign : 'end'}}>{this.props.feature.extra_money}</td>
</tr>
      </tbody>
    </table>
    </div>
    );
  }
}



const  mapStateToProps = state =>{
  console.log(state);
	return{
	feature : state.pos
	}
  };
  
  
 
// export default connect(mapStateToProps,null)(Printdata);
export default Printdata