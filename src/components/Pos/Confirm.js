import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import * as Feature from './../../actions/pos/feature'
import * as actionPos from '../../actions/pos';
import ReactToPrint from "react-to-print";

import Printdata from './Printdata'







///////////
class Confirm extends Component {
  


  PaymentPos = (id) =>{
    var newCustomer = {...this.props.confirm.show_customer};
     
      if(typeof newCustomer.IdCustomer != 'undefined')
      {
        newCustomer.Avatar = null;

      }
    this.props.payment({

      id : this.props.confirm.idbill_default,
      table : this.props.confirm.show_table,
      customer : newCustomer,
      menu : this.props.confirm.show_list_table,
      totalprice : this.props.confirm.payment_total,
      IdUser : this.props.user.id_staff,
      confirm : this.props.confirm.confirm
  },id,this.props.confirm.confirm)
}

  deleteMenu = (data,list) =>{
    this.props.delete_Menu(data, list)
  }
  afterPrint = () =>{
    var newProps = {...this.props.confirm.confirm};
    newProps.display = 'none';
    newProps.type = null;

   
   this.props.fea_payment({
    type : {
      status_event :{
        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
        status:{
            status : 'success',
            classcomponent : 'alert alert-success',
            text : 'Lưu dữ liệu thành công',
            display : 'show-alert'
        }
    },
      confirm_pos : {
        type: 'CONFIRM_POS',
        data : newProps
      },
      tab_pos_controll : {
          type : 'TAB_POS_CONTROLL',
          data : 'table',
            }, 
           
            show_customer_pos : {
              type : 'SHOW_CUSTOMER_POS',
              data : [{}],
            },
            feature_appendmenu : {
                type : 'FEATURE_APPENDMENU',
                data :  []
            },
            payment_total : {
              type : 'PAYMENT_TOTAL',
              data :  0
            },
            show_table_pos : {
                type : 'SHOW_TABLE_POS',
                data : {}
            },
            guest_money : {
              type : 'GUEST_MONEY',
              data : 0
            },
            extra_money : {
              type : 'EXTRA_MONEY',
              data : 0 
            },
            
              idbill_default_pos : {
                  type : 'IDBILL_POS_DEFAULT',
                  data : null
              },
          tabbackgroundM_pos_controll : {
                  type : 'TABBACKGROUND_M_POS_CONTROLL',
              data : {
                  backgroundColor :''
                 },
                },
                tabbackgroundT_pos_controll : {
                  type : 'TABBACKGROUND_T_POS_CONTROLL',
              data : {
                  backgroundColor : '#eb9898'
                 },
                }
           
          }
   })
  
  setTimeout(() => {
    this.props.fea_payment({
      type : {status_event :{
        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
        status:{
            status : 'success',
            classcomponent : 'alert alert-success',
            text : 'Thêm mới dữ liệu thành công ^-^',
            display : 'hide-alert'
        }
    }}
    })
  }, 2000);
  }
  btnPrint = () =>{
    if(this.props.confirm.confirm.type == 'print')
    {
      console.log('la print');
      return (
        <Fragment>
   <button onClick = {()=>{
                     
                     this.PaymentPos(true)
                     
                     }} 
                     type="button" class="btn btn-secondary" data-dismiss="modal">{this.props.confirm.confirm.btnLeft}</button>
             
          <ReactToPrint
            trigger={() => <button 
            //   onClick = {()=>{
            //     this.insertbill()
            // }}
               type="button" class="btn btn-danger">{this.props.confirm.confirm.btnRight}</button>
         }
            content={() => this.refs.componentRef}
            onBeforeGetContent = {()=>{this.PaymentPos()}}
            onAfterPrint = {()=>{this.afterPrint()}}
          />
          <div style = {{display : 'none'}}>
          <Printdata 
          feature = {this.props.confirm}
          customer = {this.props.user}
          ref="componentRef" />
          </div>
         
          </Fragment>      );
    }
    return(
      <Fragment>
      <button onClick = {()=>{
                     
                     
        var newProps = {...this.props.confirm.confirm};
          newProps.display = 'none';

        this.props.confirmFunc({
        type : {
          confirm_pos : {
          type: 'CONFIRM_POS',
          data : newProps
        }
        }
      })
        }} 
        type="button" class="btn btn-secondary" data-dismiss="modal">{this.props.confirm.confirm.btnLeft}</button>
      <button 
      onClick = {()=>{
        this.insertbill()
    }}
       type="button" class="btn btn-danger">{this.props.confirm.confirm.btnRight}</button>
       </Fragment>

    )
  }
 
  insertbill = () =>{
     
    if(this.props.confirm.idbill_default != null)
    {
      var newCustomer = {...this.props.confirm.show_customer};
     
      if(typeof newCustomer.IdCustomer != 'undefined')
      {
        newCustomer.Avatar = null;

      }
      
     
      this.props.insertBill({

          id : this.props.confirm.idbill_default,
          table : this.props.confirm.show_table,
          customer : newCustomer,
          menu : this.props.confirm.show_list_table,
          totalprice : this.props.confirm.payment_total,
          IdUser : this.props.user.id_staff,
          confirm : this.props.confirm.confirm
      })
       return;
    }

      
  }
  render() 
  
  {
    return (
     
        <div style = {{backgroundColor: 'rgba(38, 37, 37, 0.5)', opacity : '1', display : this.props.confirm.confirm.display}} id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
            <div style = {{marginTop : '50%'}} class="modal-content">
                <div class="modal-header flex-column">
                    <div class="icon-box">
                        <i class={this.props.confirm.confirm.icon}></i>
                    </div>						
                    <h4 class="modal-title w-100">{this.props.confirm.confirm.title}</h4>	
                    <button type="button" class="close" onClick = {()=>{
                      var newProps = {...this.props.confirm.confirm};
                      newProps.display = 'none';
            
                    this.props.confirmFunc({
                    type : {
                      confirm_pos : {
                      type: 'CONFIRM_POS',
                      data : newProps
                    }
                    }
                  })
                    }}>&times;</button>
                </div>
                <div class="modal-body">
                    <p>
                    {this.props.confirm.confirm.content}
                        </p>
                    </div>
                <div class="modal-footer justify-content-center">
                                     {this.btnPrint()}
                </div>
            </div>
        </div>
    </div> 
       
    );
  }
}

const  mapStateToProps = state =>{
  
	return{
    confirm : state.pos,
    user : state.user,

	}
  };
  
  
  const mapDispatchToProps = (dispatch, props) =>{
	return {
	 
	  delete_Menu : (data,list)=>{
      dispatch(actionPos.deleteMenu(data,list))
    },
    confirmFunc : (action) =>{
      dispatch(action)
    },
    insertBill : (data) =>{
      dispatch(actionPos.insertBillrequest(data))
  },
    payment : (data,id, confirm) =>{
      dispatch(actionPos.paymentPosRequest(data,id,confirm))
    },
    fea_payment : (action) =>{
      dispatch(action)
    }
	}
  }
export default connect(mapStateToProps,mapDispatchToProps)(Confirm);