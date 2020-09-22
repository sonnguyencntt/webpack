import React, { Component } from 'react';


import * as action from '../../actions/index';
import {connect} from 'react-redux';





class LiNavigation extends Component {
  
  shouldComponentUpdate(nextProps, nextState)
	{
   if(nextProps.table.count == this.props.table.count && nextProps.table.index == this.props.table.index)
		{
      return false;
    }
    return true;
	}
     showActive = (e, index, callback) =>{
       
      e.preventDefault()

      this.props.changefornavigation({type : {
          navigation_table : {
              type : 'CHANGE_NAVIGATION',
              navi : index
          },
          table_index : {
              type : 'FETCH_INDEX_TABLES',
              index : index
          }
      }});
if(callback)
{
    setTimeout(callback, );
}      
    }

  
  render() 
  
  {
    console.log('vao li')
    return (
        <li onClick = {(e)=>{this.showActive(e,this.props.index, ()=>{
                                this.props.fetchAllTables({index:this.props.index,
                                    room: this.props.event.room,
                                    table: this.props.event.table,
                                    status: this.props.event.status,
                                    type : 'TABLE'
                                  })
                                    
        })}}><a id = {this.props.id} href="#">{this.props.index}</a></li>
    
    )
    

}
}
const  mapStateToProps = state =>{
  return{
   status : state.customer.status,
   event : state.customer.event,
   table : state.customer.table,

  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    fetchAllTables : (index) =>{
        dispatch(action.acFetchTableRequest(index));
       
      },
    changefornavigation : (index) =>{
      dispatch(index)
    }
    
    // onDeleteProduct : (id) =>{
     
    //   dispatch(action.acDeleteProductsRequest(id));
    // },
    // onUpdateTable : (id) =>{
     
    //   dispatch(action.acUpdateProductsRequest(id));
    // }
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(LiNavigation); 