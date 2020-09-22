

import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actionPos from '../../actions/pos';

///////







///////////
class NumberTable extends Component {
  
   // console.log(this.props.history.match.params.id);
 

   showList_Tables = (tables) =>
   {
   var result = null;
   var backgroundColor = '';
   if(tables.length > 0)
   {
     
    result = tables.map((table,index) =>
     {
      if(table.IdBill != null)
      {
        backgroundColor = '#FF5823';
      }
      else
      {
        if(table.idStatus == 1)
        {
          backgroundColor = '#615a57';
        }
        else
        {
          return (

					
         
            <li style = {{backgroundColor : backgroundColor, cursor: 'not-allowed'}}   >{table.TableName} <img src="https://i.ya-webdesign.com/images/do-not-sign-png-3.png" style = {{width : '50%'}} alt=""/></li>
             
              );
        }
      }

    return (

					
         
    <li className = 'hover-pos-list' onClick = {()=>{

      this.fetchAlldata_Pos({IdTable : table.IdTable})
      // var style_menu = {
      //   backgroundColor :'#eb9898'
      //  }
      //  var style_table = {
      //   backgroundColor : ''
      //  }
      //                     //    this.setState({tab : 'menu',
      //                     //    style_forListMenu : style_menu,
      //                     //    style_forListTable : style_table

      //                     // });
      //                     this.props.changeTab({
      //                       type : {
      //                         tab_pos_controll : {
      //                             type : 'TAB_POS_CONTROLL',
      //                             data : 'menu',
      //                               }, 
      //                               tabbackgroundM_pos_controll : {
      //                                 type : 'TABBACKGROUND_M_POS_CONTROLL',
      //                             data : style_menu,
      //                               },
      //                               tabbackgroundT_pos_controll : {
      //                                 type : 'TABBACKGROUND_T_POS_CONTROLL',
      //                             data : style_table,
      //                               }
      //                             }
                          //})
    }}  style = {{backgroundColor : backgroundColor}}   >{table.TableName}</li>
     
      );
     })
   }
  
   return result;
   };




   fetchAlldata_Pos = (id)=>{
    this.props.fetch_All_Data_Pos(id)
   }


  render() 
  
  {
    return (
     
       
        <div class="header-cashier round_table">
			<div class="row table-list filter">
					<div class="col-md table-list-content">
						<ul>
						
								{this.showList_Tables(this.props.table.table)}
						
						</ul>
					</div>
				</div>
                </div>

    );
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return {
	changeTab: (action) =>{
		dispatch(action)
  },
  fetch_All_Data_Pos : (data) =>{
    dispatch(actionPos.fetchAlldataofPos(data))
  }
	
  }
}
const  mapStateToProps = state =>{
	return{
	 table : state.pos
	}
  };
export default connect(mapStateToProps,mapDispatchToProps)(NumberTable);