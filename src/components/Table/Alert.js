import React, { Component } from 'react';


import {connect} from 'react-redux';





class Alert extends Component {
  

  shouldComponentUpdate(nextProps, nextState)
	{
   if(JSON.stringify(nextProps.status) == JSON.stringify(this.props.status))
		{
      return false;
    }
    return true;
	}

  
  render() 
  
  {
    console.log('alert');
     var {status} = this.props;
    
    return (
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 alert-position" id = {status.display}>
		
		<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
			
		</div>
		
		<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 alert-format">
		<div class={status.classcomponent} id = "alert-text" role="alert">
  {status.text}
</div>
		</div>
		
		
	</div>
       
    )
    

}
}
const  mapStateToProps = state =>{
  return{
   status : state.table.status
  }
}



export default connect(mapStateToProps,null)(Alert); 