import React, { Component } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import * as action from '../../actions/index';
import {connect} from 'react-redux';
import SelectSTT from './SelectSTT';
import SelectRoom from './SelectCustomer';
import * as Types from './../../constants/ActionType'





class ModalInsert extends Component {
  
//     shouldComponentUpdate(nextProps, nextState)
// 	{
//    if((JSON.stringify(nextProps.form) == JSON.stringify(this.props.form)) )
// 		{
//       return false;
//     }
//     return true;
// 	}
callback = (Reader) =>{
 this.props.onchange({type : {
                                  onchangesupplier_avatarsupplier :{
                                    type: Types.CHANGE_CUSTOMER_AVATARSUPPLIER,
                                    text : Reader.result
                                  }
                                }})
}
 onchange = (e, object, readFile) =>{
  if(readFile)
  {
    var Reader= new FileReader();
                                Reader.readAsDataURL(e.target.files[0]);
                               Reader.onload = () => {
                               

                                       readFile(Reader)          
                                  // this.props.onchange({type : {
                                  //   onchangesupplier_avatarsupplier :{
                                  //     type: Types.CHANGE_CUSTOMER_AVATARSUPPLIER,
                                  //     text : Reader.result
                                  //   }
                                  // }})
                                }
  }

    this.props.onchange({type : object})
	

}
submitinsert = (data) =>{
this.props.onInsertTable(data)
}
  render() 
  
  {
    console.log(this.props.form)
    return (
						
        <div class="modal-body">
        <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Mã Khách Hàng</b>
        </div>
        <div class="col-md-9 format-text">
          <input type="text" 
           type="text" 
           name="id" 
           value = {this.props.form.idcustomer}
           onChange = {(e)=>{this.onchange(e,{onchange_idcustomer :{
               type : Types.CHANGE_IDCUSTOMER,
               text : e.target.value
           }})}}
           placeholder="Mã Khách Hàng" 
           class="form-control" />
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Tên Khách Hàng</b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.namecustomer}
          onChange = {(e)=>{this.onchange(e,{onchange_namecustomer :{
            type : Types.CHANGE_NAMECUSTOMER,
            text : e.target.value
        }})}}
          placeholder="Tên Khách Hàng"
          class="form-control"/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Ngày Sinh </b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.birthdaycustomer}
          onChange = {(e)=>{this.onchange(e,{onchange_birthdaycustomer :{
            type : Types.CHANGE_BIRTHDAYCUSTOMER,
            text : e.target.value
        }})}}
          placeholder="Ngày Sinh"
            
          class="form-control"/>
        </div>
    </div>
    {/* <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Phòng / Tầng</b>
        </div>
        <div class="col-md-9">
    <SelectRoom/>
        </div>
    </div> */}
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Email</b>
        </div>
        <div class="col-md-9">
          <input 
          type="email" 
          name="name" 
          value = {this.props.form.emailcustomer}
          onChange = {(e)=>{this.onchange(e,{onchange_emailcustomer :{
            type : Types.CHANGE_EMAILCUSTOMER,
            text : e.target.value
        }})}}
          placeholder="Email"
            
          class="form-control"/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Số Điện Thoại</b>
        </div>
        <div class="col-md-9">
          <input 
          type="number" 
          name="name" 
          value = {this.props.form.phonecustomer}
          onChange = {(e)=>{this.onchange(e,{onchange_phonecustomer :{
            type :Types.CHANGE_PHONECUSTOMER,
            text : Number(e.target.value)
        }})}}
          placeholder="Số Điện Thoại"
            
          class="form-control"/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Địa Chỉ</b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.addresscustomer}
          onChange = {(e)=>{this.onchange(e,{onchange_addresscustomer :{
            type : Types.CHANGE_ADDRESSCUSTOMER,
            text : e.target.value
        }})}}
          placeholder="Địa Chỉ"
            
          class="form-control"/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Chú Thích </b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.notecustomer}
          onChange = {(e)=>{this.onchange(e,{onchange_notecustomer :{
            type : Types.CHANGE_NOTECUSTOMER,
            text : e.target.value
        }})}}
          placeholder="Chú Thích"
            
          class="form-control"/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Ghi Nợ</b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.debitcustomer}
          onChange = {(e)=>{this.onchange(e,{onchange_debitcustomer :{
            type :Types.CHANGE_DEBITCUSTOMER,
            text : e.target.value
        }})}}
          placeholder="Ghi Nợ"
            
          class="form-control"/>
        </div>
    </div>
    <div class="row form-group">
      
        <div class="col-md-12 text-center">
                        <div class="jumbotron">
                            <h3>Upload hình ảnh nhà cung cấp</h3>
                            <p>(Để tải và hiện thị nhanh, mỗi ảnh lên có dung lượng tối đa 5MB.)</p>
                            <input 
                             type="file" class="form-control-file" id="file"

                            onChange = {(e)=>{
                              this.onchange(e, 'FILE' , (Reader)=>
                           {
                                              console.log(Reader);           
                                  this.props.onchange({type : {
                                    onchange_avatarcustomer :{
                                      type: Types.CHANGE_AVATARCUSTOMER,
                                      text : Reader.result
                                    }
                                  }})
                               
                              }
                                
                            
                               )
                            }}

                          
                            />  
                             <label htmlFor="file">da</label>
                        </div>
                    </div>
    </div>
    
        </div>
    )
    

}
}
const  mapStateToProps = state =>{
  
	return{
      form : state.customer.form_onChange,
      event : state.customer.event
	}
  }
const mapDispatchToProps = (dispatch, props) =>{
  return {
   
   
    onchange : (text) =>{
        dispatch(text)
    },
    onInsertTable : (data) =>{
        dispatch (action.acInsertTableRequest(data))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalInsert);