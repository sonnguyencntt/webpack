import React, { Component } from 'react';
import { connect } from 'react-redux';

import Room from './Customer';
import Table from './Table';


class Tabs extends Component {
  
shouldComponentUpdate(nextProps, nextState)
{
  if(this.props.ontap.table.display == nextProps.ontap.table.display)
  {
    return false
  }
  return true;
}

  onTapTable = (name) =>{
    var statefornewUpdate =  {};

    if(name == 'table'){
    
      this.props.onChangeTab({type : {
        ontapRoom :{
          type : 'ONTAP_CHANGE_ROOM',
          ontap : {
            display : 'hide-modal',
            action : '',
            textcolor : 'default-color',
          }
        },
        ontapTable :{
          type : 'ONTAP_CHANGE_TABLE',
          ontap : {
            display : 'show-alert',
            action : 'active',
            textcolor : 'colorforontap',
          },
        },
        onbtnRoom : {
          type : 'ONTAP_CHANGE_BUTTON_ROOM',
          ontap : 'hide-alert'
        },
        onbtnTable : {
          type : 'ONTAP_CHANGE_BUTTON_TABLE',
          ontap : ''
        }
      }})
    }
    else
    {
      this.props.onChangeTab({type : {
        ontapRoom :{
          type : 'ONTAP_CHANGE_ROOM',
          ontap : {
            display : 'show-alert',
            action : 'active',
            textcolor : 'colorforontap',
          },
        },
        ontapTable :{
          type : 'ONTAP_CHANGE_TABLE',
          ontap : {
            display : 'hide-modal',
            action : '',
            textcolor : 'default-color',
          }
        },
        onbtnRoom : {
          type : 'ONTAP_CHANGE_BUTTON_ROOM',
          ontap : ''
        },
        onbtnTable : {
          type : 'ONTAP_CHANGE_BUTTON_TABLE',
          ontap : 'hide-alert'
        }
      }})
    }
  }
  render() 
  
  {
  
console.log('tab');
    return (
     
       
        
			<div class="col-md-12 " id="table-list">
			
      <div role="tabpanel">
          <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" className={this.props.ontap.table.action} onClick = {()=>{this.onTapTable('table')}}>
                  <a href="#"  onClick={ev => {ev.preventDefault()}} className={this.props.ontap.table.textcolor}>
                  <i class="fa fa-user-circle"></i> &nbsp;&nbsp; Nhà cung cấp</a>
              </li>
              <li role="presentation"  className={this.props.ontap.room.action} onClick = {()=>{this.onTapTable('room')}}>
                  <a href="#" onClick={ev => {ev.preventDefault()}} className={this.props.ontap.room.textcolor}>
                  <i class="fa fa-users" aria-hidden="true"></i> &nbsp;&nbsp;
                    Khách hàng</a>
              </li>
          </ul>
      
          <div class="tab-content">
              <div role="tabpanel" class="tab-pane " id={this.props.ontap.table.display}>
                  <Table/>
              </div>
              <div role="tabpanel" class="tab-pane" id={this.props.ontap.room.display}>
              <Room/>
              </div>
          </div>
      </div>
      
			</div>

        

    );
  }
}

const  mapStateToProps = state =>{

  return{
  ontap : state.customer.onTap
  }
}

const mapDispatchToProps = (dispatch, props) =>{
return {
  onChangeTab : (tap) =>{
    dispatch(tap)
  }
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Tabs);