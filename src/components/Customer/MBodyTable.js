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
            <b>Mã Nhà Cung Cấp</b>
        </div>
        <div class="col-md-9 format-text">
          <input type="text" 
           type="text" 
           name="id" 
           value = {this.props.form.idsupplier}
           onChange = {(e)=>{this.onchange(e,{onchangesupplier_idsupplier :{
               type : Types.CHANGE_CUSTOMER_IDSUPPLIER,
               text : e.target.value
           }})}}
           placeholder="Mã Nhà Cung Cấp" 
           class="form-control" />
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Tên Nhà Cung Cấp</b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.namesupplier}
          onChange = {(e)=>{this.onchange(e,{onchangesupplier_namesupplier :{
            type : Types.CHANGE_CUSTOMER_NAMESUPPLIER,
            text : e.target.value
        }})}}
          placeholder="Tên Nhà Cung Cấp"
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
          value = {this.props.form.emailsupplier}
          onChange = {(e)=>{this.onchange(e,{onchangesupplier_emailsupplier :{
            type : Types.CHANGE_CUSTOMER_EMAILSUPPLIER,
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
          value = {this.props.form.phonesupplier}
          onChange = {(e)=>{this.onchange(e,{onchangesupplier_phonesupplier :{
            type :Types.CHANGE_CUSTOMER_PHONESUPPLIER,
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
          value = {this.props.form.addresssupplier}
          onChange = {(e)=>{this.onchange(e,{onchangesupplier_addresssupplier :{
            type : Types.CHANGE_CUSTOMER_ADDRESSSUPPLIER,
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
          value = {this.props.form.notesupplier}
          onChange = {(e)=>{this.onchange(e,{onchangesupplier_notesupplier :{
            type : Types.CHANGE_CUSTOMER_NOTESUPPLIER,
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
          value = {this.props.form.debitsupplier}
          onChange = {(e)=>{this.onchange(e,{onchangesupplier_debitsupplier :{
            type :Types.CHANGE_CUSTOMER_DEBITSUPPLIER,
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
                                    onchangesupplier_avatarsupplier :{
                                      type: Types.CHANGE_CUSTOMER_AVATARSUPPLIER,
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