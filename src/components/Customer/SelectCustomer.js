import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';





class SelectRoom extends Component {
 
  shouldComponentUpdate(nextProps, nextState)
	{
   

   if((nextProps.form.idarea != this.props.form.idarea) || (JSON.stringify(this.props.table) != JSON.stringify(nextProps.table)))
		{
      return true;
    }
    return false;
	}



  onchange = (event, object) =>{
      this.props.onchange({type : object})
    
  
  }
  ListRoom = (listArray) =>{
    var result  = null;
    if(listArray.length > 0){
      result = listArray.map((room, index) =>{
        return (
        <option value={room.IdArea}>{room.BranchName}</option>
        )
      })
    }
    return result;
  }
  render() 
  
  {
   
console.log('select_room')
    return (
        <select name="" value = {this.props.form.idarea}id="input"   onChange = {(e)=>{this.onchange(e,{onchangetable_idarea :{
          type : 'CHANGE_TABLE_IDAREA',
          text : e.target.value
      }})}} class="form-control" >
        <option value="">Tất cả</option>
        {this.ListRoom(this.props.table)}

    </select>
       
    )
    

}
}
const  mapStateToProps = state =>{
console.log(state);
  return{
    table : state.customer.rooms,
    form : state.customer.formtable
  }
};

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onchange : (text) =>{
      dispatch(text)
  },
	onFetchsttTable : () =>{
	  dispatch(action.acFetchsttTableRequest())
  },
  onchangeforarea : (parameter) =>{
      dispatch(parameter)
  }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectRoom);