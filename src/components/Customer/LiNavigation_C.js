import React, { Component } from 'react';


import * as action from '../../actions/index';
import {connect} from 'react-redux';





class LiNavigation extends Component {
  
  // shouldComponentUpdate(nextProps, nextState)
	// {
  //  if(nextProps.table.count == this.props.table.count && nextProps.table.index == this.props.table.index)
	// 	{
  //     return false;
  //   }
  //   return true;
	// }
     showActive = (e, index, callback) =>{
       
      e.preventDefault()

      this.props.changefornavigation({type : {
          navigation_customer : {
              type : 'CHANGE_NAVIGATION_CUSTOMER',
              navi : index
          },
          customer_index : {
              type : 'FETCH_INDEX_CUSTOMER',
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
                                  id : this.props.form.id_name_search_customer,
                                  debit : Number(this.props.form.debit_search_customer),
                                  type : 'CUSTOMER',
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
   customer : state.customer.customer,
   form : state.customer.form_onChange


  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    fetchAllTables : (index) =>{
        dispatch(action.acFetchCustomerRequest(index));
       
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