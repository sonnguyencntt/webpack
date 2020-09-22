import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';






class Modalbody extends Component {
  
  shouldComponentUpdate(nextProps, nextState)
	{
   if((JSON.stringify(nextProps.form) == JSON.stringify(this.props.form)) )
		{
      return false;
    }
    return true;
	}


 
  
  render() 
  
  {
      console.log('form nha')
    return (
       <div class="modal-body">
					<div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Mã phòng / tầng</b>
                    </div>
                    <div class="col-md-9">
					  <input type="text" 
					   type="text" 
					   name="id" 
					   value = {this.props.form.room}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputIdRoom : {
                type : 'CHANGE_ROOM_IDROOM',
                data : e.target.value
              }
            }})}}
					   placeholder="Nhập mã phòng / tầng" 
					   class="form-control" />
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-3 format-text">
                        <b>Tên phòng / tầng</b>
                    </div>
                    <div class="col-md-9 ">
					  <input 
					  type="text" 
					  name="name" 
					  value = {this.props.form.name}
					  onChange = {(e)=>{this.props.onChange({type :{
              inputNameRoom : {
                type : 'CHANGE_ROOM_NAMEROOM',
                data : e.target.value
              }
            }})}}
					  placeholder="Nhập tên phòng / tầng"
					  class="form-control"/>
                    </div>
                </div>
					</div> 
    )
    

}
}
const  mapStateToProps = state =>{
  
    return{
      form : state.table.formroom
    }
  }
  const mapDispatchToProps = (dispatch, props) =>{
    return {
    onChange : (data)=>{
      dispatch(data)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modalbody);