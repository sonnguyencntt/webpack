import React, { Component } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import * as action from '../../actions/index';
import {connect} from 'react-redux';
import SelectSTT from './SelectSTT';
import SelectRoom from './SelectRoom';






class ModalInsert extends Component {
  
    shouldComponentUpdate(nextProps, nextState)
	{
   if((JSON.stringify(nextProps.form) == JSON.stringify(this.props.form)) )
		{
      return false;
    }
    return true;
	}

 onchange = (event, object) =>{
    this.props.onchange({type : object})
	

}
submitinsert = (data) =>{
this.props.onInsertTable(data)
}
  render() 
  
  {
      
    return (
						
        <div class="modal-body">
        <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Mã Bàn</b>
        </div>
        <div class="col-md-9 format-text">
          <input type="text" 
           type="text" 
           name="id" 
           value = {this.props.form.idtable}
           onChange = {(e)=>{this.onchange(e,{onchangetable_idtable :{
               type : 'CHANGE_TABLE_IDTABLE',
               text : e.target.value
           }})}}
           placeholder="Nhập mã bàn" 
           class="form-control" />
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Tên Bàn</b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.name}
          onChange = {(e)=>{this.onchange(e,{onchangetable_name :{
            type : 'CHANGE_TABLE_NAME',
            text : e.target.value
        }})}}
          placeholder="Nhập tên bàn"
          class="form-control"/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Phòng / Tầng</b>
        </div>
        <div class="col-md-9">
    <SelectRoom/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Trạng thái</b>
        </div>
        <div class="col-md-9">
        <SelectSTT/>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-md-3 format-text">
            <b>Hóa Đơn</b>
        </div>
        <div class="col-md-9">
          <input 
          type="text" 
          name="name" 
          value = {this.props.form.bill}
          onChange = {this.onChange}
          placeholder="Hóa Đơn"
          disabled
          class="form-control"/>
        </div>
    </div>
    
        </div>
    )
    

}
}
const  mapStateToProps = state =>{
  
	return{
      form : state.table.formtable,
      event : state.table.event
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