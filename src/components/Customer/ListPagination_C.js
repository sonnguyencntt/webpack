import React, { Component } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import * as action from '../../actions/index';
import Li from './LiNavigation_C';
import {connect} from 'react-redux';


class ListPagination extends Component {
  // shouldComponentUpdate(nextProps, nextState)
	// {
  //  if(nextProps.table.count == this.props.table.count && nextProps.table.index == this.props.table.index)
	// 	{
  //     return false;
  //   }
  //   return true;
	// }

  constructor(props){
    super(props);
    this.state = {
     active : 'pagination-col',
     
    }
    } 


    prevPage = (e) =>{
      e.preventDefault()

      if(this.props.customer.index == 1)
      {
        return;
      }
      else
      {
        this.props.fetchAllTables({index : this.props.customer.index - 1,
          id : this.props.form.id_name_search_customer,
                                debit : Number(this.props.form.debit_search_customer),
                                type : 'CUSTOMER',
        })
       
      }
    }
    nextPage = (e) =>{
      e.preventDefault()

      if(this.props.customer.index == this.props.customer.count)
      {
        return;
      }
      else
      {
        this.props.fetchAllTables({index : this.props.customer.index + 1,
          id : this.props.form.id_name_search_customer,
                                debit : Number(this.props.form.debit_search_customer),
                                type : 'CUSTOMER',
        })


       
      }
    }
  
    showPagination = (number) =>
    {
        var result = [];
if(number > 0)
{
    for (var i =1; i<= number;i++)
    {
       if(i==this.props.customer.index){

       result[i] = <Li index = {i}
       id = {this.state.active}
       />
      
      }
      else
      {
        result[i] = <Li index = {i}
        id = ''

        />
       }
    }
    return result;
}

    return result;


    };


  render() 
  
  {
    
    return (
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		
		<ul class="pagination pagination-lg float-pagination">
			<li onClick = {(e) =>{this.prevPage(e)}}><a href="#">&laquo;</a></li>
            {this.showPagination(this.props.customer.count)}
		
			<li onClick = {(e) =>{this.nextPage(e)}}><a href="#">&raquo;</a></li>
		</ul>
		
	</div>
       
    )
    

}
}

const  mapStateToProps = state =>{
  return{
    table : state.customer.table,
    event : state.customer.event,
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
  
  
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ListPagination);
