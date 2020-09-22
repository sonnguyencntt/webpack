import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as action from '../../actions/pos';
import Print from './Printbill'
import Alert from './../Customer/Alert'

///////







///////////
class Menu extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
     style_Default : {
       backgroundColor : '',
     },
     style_Select : {
      backgroundColor : '#c62253',
     },
     choose : 'DF_101'
    };
  }
  selectButton = (id) =>{
    this.setState({choose : id},()=>{
      this.props.onfetch_tableforSelect({data : id})
    })
  }
   // console.log(this.props.history.match.params.id);
 onclickButonofAreas = (id) =>{
  this.setState({choose : id})
 }
   showList_Areas = (areas) =>
   {
     console.log(areas);
   var result = null;
   var style = {width : '100px'}
   if(areas.length > 0)
   {
     
    result = areas.map((area,index) =>
     {
      if(this.state.choose == 'DF_101')
      {
        if(index == 0)
        {
          return (

					
            <button onClick = {()=>{
              this.selectButton(area.IdArea)
            }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Select}>{area.BranchName}</button>
                 
             
             
              );
        }
       return (
          <button onClick = {()=>{
            this.selectButton(area.IdArea)
          }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Default}>{area.BranchName}</button>
       )
        
      }
      else
      {
        if(area.IdArea == this.state.choose)
        {
          return (
  
            
            <button onClick = {()=>{
              this.selectButton(area.IdArea)
            }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Select}>{area.BranchName}</button>
                 
             
             
              );
        }
       return(
        <button onClick = {()=>{
          this.selectButton(area.IdArea)
        }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Default}>{area.BranchName}</button>
             
       )
      }

     
   
     })
   }
   else
   {
     var Undefined_ = [];
     for(var i = 0; i< 8 ; i++)
     {
      Undefined_[i] = <button class="btn btn-primary col-3 size-margin-button">Undefined!!</button>
        
     }
     result = Undefined_
    return result
   }
   return result;
   };
   componentWillMount(){
     this.props.onfetch_area()
    
   }
 
  
  render() 
  
  {
    console.log(this.props);

    return (
     
       
       	<div class="row list-filter filter">
           
					<div class="col-md list-filter-content">
					
								{this.showList_Areas(this.props.area.areas)}
						
					</div>
				</div>

    );
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
	onfetch_area: () =>{
		dispatch(action.fetchAreaONrequest())
  },
  onfetch_tableforSelect: (id) =>{
		dispatch(action.fetchTableforSelectONrequest(id))
	},
	
}
}
const  mapStateToProps = state =>{
	return{
   area : state.pos,
   status : state.customer.status

	}
  };
export default connect(mapStateToProps,mapDispatchToProps)(Menu);