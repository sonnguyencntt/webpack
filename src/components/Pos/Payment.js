import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as Feature from './../../actions/pos/feature'
import * as actionPos from '../../actions/pos';

import Alert from './../Table/Alert'






///////////
class Payment extends Component {
  


  insertbill = () =>{
      console.log(this.props.feature.show_list_table.length)
     if(typeof this.props.feature.show_list_table.length == undefined || this.props.feature.show_list_table.length == 0)
     {
        this.props.confirm({
            type : {
                status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Phải chọn ít nhất 1 sản phẩm',
                        display : 'show-alert'
                    }
                },
            }
        })
        setTimeout(() => {
            this.props.confirm({
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
          return;
     }
    if(this.props.feature.idbill_default != null)
    {
        var newProps = {...this.props.feature.confirm};
        newProps.icon = 'fa fa-pencil-square-o';
        newProps.modalBody = "Bạn có thật sự muốn thay đổi dữ liệu này ? Dữ liệu bị thay đổi và không được hồi phục";
        newProps.display = 'block';
        newProps.type = null;
        
       this.props.confirm({
           type : {
               confirm_pos : {
               type: 'CONFIRM_POS',
               data : newProps
           }
           }
       })
       return;
    }

      var newCustomer = {...this.props.feature.show_customer};
     
      if(typeof newCustomer.IdCustomer != 'undefined')
      {
        newCustomer.Avatar = null;

      }
      
     
      this.props.insertBill({

          id : this.props.feature.idbill_default,
          table : this.props.feature.show_table,
          customer : newCustomer,
          menu : this.props.feature.show_list_table,
          totalprice : this.props.feature.payment_total,
          IdUser : this.props.user.id_staff
      })
  }
 
  render() 
  
  {
    return (
     
       
        <div class="row bill-action margin-bill-action">

        <div class="col-md-6 margin-payment">
            <div class="row">
                <div class="col-md-12 p-1">
                    <textarea class="form-control" id="note-order" placeholder="Nhập ghi chú hóa đơn" rows="3"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-xs-6 p-1 button-left">
                    <button 
                    onClick = {()=>{
                        if(typeof this.props.feature.show_list_table.length == undefined || this.props.feature.show_list_table.length == 0)
                        {
                           this.props.confirm({
                               type : {
                                   status_event :{
                                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                                       status:{
                                           status : 'success',
                                           classcomponent : 'alert alert-danger',
                                           text : 'Phải chọn ít nhất 1 sản phẩm',
                                           display : 'show-alert'
                                       }
                                   },
                               }
                           })
                           setTimeout(() => {
                               this.props.confirm({
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
                             return;
                        }
                        var newProps = {...this.props.feature.confirm};
                        newProps.icon = 'fa fa-cog';
                        newProps.content = "Bạn có muốn in biên lai sau khi thanh toán hoá đơn '\r\n' Bạn có thể chọn dấu x để thoát trạng thái thanh toán";
                        newProps.display = 'block';
                        newProps.btnRight = 'Yes';
                        newProps.btnLeft = 'No';
                        newProps.title = 'Thanh toán hoá đơn';
                        newProps.type = 'print';

                        
                       this.props.confirm({
                           type : {
                               confirm_pos : {
                               type: 'CONFIRM_POS',
                               data : newProps
                           }
                           }
                       })
                    }}
                    type="button" class="btn-print" onclick="cms_save_table()"><i class="fa fa-credit-card" aria-hidden="true"></i> Thanh Toán (F9)</button>
                </div>
                <div class="col-md-6 col-xs-6 p-1 button-right">
                    <button 
                    onClick = {()=>{
                        this.insertbill()
                    }}
                     type="button" class="btn-pay" onclick="cms_save_oder()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Lưu (F10)</button>
                </div>
            </div>
         </div>
         <div class="col-md-6">
             <div class="row form-group">
                <label class="col-form-label col-md-4"><b>Tổng cộng</b></label>
                <div class="col-md-8">
                    <input type="text"  value = {this.props.feature.payment_total} class="form-control total-pay" disabled="disabled"/>
                </div>
            </div>
            <div class="row form-group">
                <label class="col-form-label col-md-4"><b>Khách Đưa</b></label>
                <div class="col-md-8">
                    <input 
                    onChange = {(e)=>{
                        var extraMoney = Number(e.target.value) - Number(this.props.feature.payment_total);
                        this.props.extraMoney({

                            type : {
                               
                                extra_money : {
                                    type : 'EXTRA_MONEY',
                                    data : extraMoney
                                  },
                                  guest_money : {
                                    type : 'GUEST_MONEY',
                                    data : e.target.value
                                  }
                                  
                              }
                        }
                    )
                    }}
                     type="text"  class="form-control customer-pay" defaultValue={this.props.feature.guest_money}  placeholder="Nhập số điền khách đưa"/>
                </div>
            </div>
            <div class="row form-group">
                <label class="col-form-label col-md-4"><b>Tiền thừa</b></label>
                <div class="col-md-8 excess-cash">
                {this.props.feature.extra_money}
                </div>
            </div>
         </div>
    </div>

    );
  }
}

const  mapStateToProps = state =>{
  
	return{
    feature : state.pos,
    user : state.user
	}
  };
  
  
  const mapDispatchToProps = (dispatch, props) =>{
	return {
	 
	  extraMoney : (action) =>{
		dispatch(action)
	},
	insertBill : (data) =>{
        dispatch(actionPos.insertBillrequest(data))
    },
    confirm : (action) =>{
		dispatch(action)
    },
    
	}
  }
export default connect(mapStateToProps,mapDispatchToProps)(Payment);