import React, { Component } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import * as action from '../../actions/index';
import Li from './LiNavigation';
import {connect} from 'react-redux';


class ListPagination extends Component {
  shouldComponentUpdate(nextProps, nextState)
	{
   if(nextProps.table.count == this.props.table.count && nextProps.table.index == this.props.table.index)
		{
      return false;
    }
    return true;
	}

  constructor(props){
    super(props);
    this.state = {
     active : 'pagination-col',
     
    }
    } 


    prevPage = (e) =>{
      e.preventDefault()

      if(this.props.table.index == 1)
      {
        return;
      }
      else
      {
        this.props.fetchAllTables({index : this.props.table.index - 1,
          room: this.props.event.room,
          table: this.props.event.table,
          status: this.props.event.status,
          type : 'TABLE'
        })
       
      }
    }
    nextPage = (e) =>{
      e.preventDefault()

      if(this.props.table.index == this.props.table.count)
      {
        return;
      }
      else
      {
        this.props.fetchAllTables({index : this.props.table.index + 1,
          room: this.props.event.room,
          table: this.props.event.table,
          status: this.props.event.status,
          type : 'TABLE'
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
       if(i==this.props.table.index){

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
            {this.showPagination(this.props.table.count)}
		
			<li onClick = {(e) =>{this.nextPage(e)}}><a href="#">&raquo;</a></li>
		</ul>
		
	</div>
       
    )
    

}
}

const  mapStateToProps = state =>{
  return{
    table : state.customer.table,
    event : state.customer.event

  
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
  
  
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ListPagination);
