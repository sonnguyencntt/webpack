import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as action from '../../actions/pos';


///////







///////////
class MenuProduct extends Component {
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
      this.props.onfetch_menuforSelect({data : id})
    })
  }
   // console.log(this.props.history.match.params.id);
 onclickButonofAreas = (id) =>{
  this.setState({choose : id})
 }
   showList_Areas = (cates) =>
   {
   var result = null;
   var style = {width : '100px'}
   if(cates.length > 0)
   {
     
    result = cates.map((cate,index) =>
     {
      if(this.state.choose == 'DF_101')
      {
        if(index == 0)
        {
          return (

					
            <button onClick = {()=>{
              this.selectButton(cate.Idcate)
            }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Select}>{cate.CateName}</button>
                 
             
             
              );
        }
       return (
          <button onClick = {()=>{
            this.selectButton(cate.Idcate)
          }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Default}>{cate.CateName}</button>
       )
        
      }
      else
      {
        if(cate.Idcate == this.state.choose)
        {
          return (
  
            
            <button onClick = {()=>{
              this.selectButton(cate.Idcate)
            }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Select}>{cate.CateName}</button>
                 
             
             
              );
        }
       return(
        <button onClick = {()=>{
          this.selectButton(cate.Idcate)
        }} class="btn btn-primary col-3 size-margin-button" style = {this.state.style_Default}>{cate.CateName}</button>
             
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
     this.props.onfetch_cate()
    
   }
 
 
  render() 
  
  {
    return (
     
       
       	<div class="row list-filter filter">
					<div class="col-md list-filter-content">
					
									
                  {this.showList_Areas(this.props.cate.cates)}

						
					</div>
				</div>

    );
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
	onfetch_cate: () =>{
		dispatch(action.fetchCateONrequest())
  },
  onfetch_menuforSelect: (id) =>{
		dispatch(action.fetchMenuforSelectONrequest(id))
	},
	
}
}
const  mapStateToProps = state =>{
	return{
	 cate : state.pos
	}
  };
export default connect(mapStateToProps,mapDispatchToProps)(MenuProduct);