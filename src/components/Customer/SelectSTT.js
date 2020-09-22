import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';





class SelectSTT extends Component {
  shouldComponentUpdate(nextProps, nextState)
	{
   if(JSON.stringify(nextProps.status)== JSON.stringify(this.props.status))
		{
      return false;
    }
    return true;
	}

  componentWillMount(){
    this.props.onFetchsttTable();
  }

  ListStatus = (listArray) =>{
    var result  = null;
    if(listArray.length > 0){
      result = listArray.map((status, index) =>{
        return (
        <option value={status.Id_stt}>{status.name}</option>
        )
      })
    }
    return result;
  }
  render() 
  
  {
    

    return (
        <select name="" value = '1'id="input" onChange = {()=>{}} class="form-control" disabled>
        <option value="">Tất cả</option>
        {this.ListStatus(this.props.status)}

    </select>
       
    )
    

}
}
const  mapStateToProps = state =>{

  return{
    status : state.customer.stttable
  }
};

const mapDispatchToProps = (dispatch, props) =>{
  return {
	onFetchsttTable : () =>{
	  dispatch(action.acFetchsttTableRequest())
	},
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SelectSTT);