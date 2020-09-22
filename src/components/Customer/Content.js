import React, { Component } from 'react';
import Tabs from './Tabs';
import { connect } from 'react-redux';

import ModalbodyCustomer from './MBodyCustomer';
import * as logic from '../../actions/logic';
import * as action from '../../actions/index';
import * as export_Data from '../../actions/exportdata';
import Alert from './Alert'
import ModalbodyTable from './MBodyTable';





class Content extends Component {

// 	shouldComponentUpdate(nextProps, nextState)
// 	{
   
//    if(nextProps.modal.mTable.classOntap == this.props.modal.mTable.classOntap && nextProps.modal.mRoom.classOntap == this.props.modal.mRoom.classOntap)
// 		{
//       return false;
//     }
//     return true;
// 	}
 submit = (statusEvent, callbackError)=>{

	if(logic.logic_Before_Sentdata([]) == true)
	{
		
		
		
		if(statusEvent == true)
		{
			this.props.onInsertRoom({
				idcustomer : this.props.form.idcustomer,
					namecustomer :this.props.form.namecustomer,
					emailcustomer :this.props.form.emailcustomer,
					phonecustomer : this.props.form.phonecustomer,
					addresscustomer :this.props.form.addresscustomer,
					birthdaycustomer :this.props.form.birthdaycustomer,

					notecustomer : this.props.form.notecustomer,
					debitcustomer :this.props.form.debitcustomer,
					avatarcustomer : this.props.form.avatarcustomer,
					id : this.props.form.id_name_search_customer,
                                debit : Number(this.props.form.debit_search_customer),
                              
					 index : 1,
				type : 'CUSTOMER'
			});
		}
		else{
			this.props.updateCustomer({
				idcustomer : this.props.form.idcustomer,
					namecustomer :this.props.form.namecustomer,
					emailcustomer :this.props.form.emailcustomer,
					phonecustomer : this.props.form.phonecustomer,
					addresscustomer :this.props.form.addresscustomer,
					birthdaycustomer :this.props.form.birthdaycustomer,
					notecustomer : this.props.form.notecustomer,
					debitcustomer :this.props.form.debitcustomer,
					indexcustomer : this.props.form.indexcustomer,

					avatarcustomer : this.props.form.avatarcustomer,
					id : this.props.form.id_name_search_customer,
                                debit : Number(this.props.form.debit_search_customer),
                              
					 index : 1,
				type : 'CUSTOMER'
			});
		}
	}
	else{
		const status = {
			status : 'error',
			classcomponent : 'alert alert-danger',
			text : 'Vui lòng nhập đầy đủ thông tin ^-^',
			display : 'show-alert'
		}
		this.props.showAlert({type : {status_event :{
			type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
			status:status
		}}})
		if(callbackError)
		{
			setTimeout(()=>{
				callbackError({
					status : 'error',
					classcomponent : 'alert alert-danger',
					text : 'Vui lòng nhập đầy đủ thông tin ^-^',
					display : 'hide-alert'
				})
			}, 2000);
		}
	}
	
	
	
	
 }
 submit_table = (statusEvent, callbackError)=>{

	if(logic.logic_Before_Sentdata([
		this.props.form.idsupplier,
		this.props.form.namesupplier,
		this.props.form.emailsupplier,
		this.props.form.phonesupplier,
		this.props.form.addresssupplier,
		this.props.form.notesupplier,
		this.props.form.debitsupplier,
		this.props.form.avatarsupplier

	]) == true)
	{
		
		
		
		if(statusEvent == true)
		{
			this.props.inSertTable(
				{
					idsupplier : this.props.form.idsupplier,
					namesupplier :this.props.form.namesupplier,
					emailsupplier :this.props.form.emailsupplier,
					phonesupplier : this.props.form.phonesupplier,
					addresssupplier :this.props.form.addresssupplier,
					notesupplier : this.props.form.notesupplier,
					debitsupplier :this.props.form.debitsupplier,
					avatarsupplier : this.props.form.avatarsupplier,
					id : this.props.form.id_name_search_supplier,
                                debit : Number(this.props.form.debit_search_supplier),
                              
					 index : 1,
				type : 'SUPPLIER'
				// idtable : this.props.formtable.idtable,
				// name : this.props.formtable.name,
				// idarea : this.props.formtable.idarea,
				// room : this.props.event.room,
				// table : this.props.event.table,
				// status : this.props.event.status,
				// index : 1,
				// type : 'TABLE'
		
			})
		}
		else{
			this.props.upDateTable({idsupplier : 		this.props.form.idsupplier,
				namesupplier :		this.props.form.namesupplier,
				emailsupplier :		this.props.form.emailsupplier,
				phonesupplier : 	this.props.form.phonesupplier,
				addresssupplier :		this.props.form.addresssupplier,
				notesupplier : 	this.props.form.notesupplier,
				debitsupplier : 	this.props.form.debitsupplier,
				avatarsupplier : 	this.props.form.avatarsupplier,
				indexsupplier : this.props.form.indexsupplier,
				id : this.props.form.id_name_search_supplier,
                 debit : Number(this.props.form.debit_search_supplier),
                              
				 index : 1,
			type : 'SUPPLIER'

		
			})
		}
	}
	else{
		const status = {
			status : 'error',
			classcomponent : 'alert alert-danger',
			text : 'Vui lòng nhập đầy đủ thông tin ^-^',
			display : 'show-alert'
		}
		this.props.showAlert({type : {status_event :{
			type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
			status:status
		}}})
		if(callbackError)
		{
			setTimeout(()=>{
				callbackError({
					status : 'error',
					classcomponent : 'alert alert-danger',
					text : 'Vui lòng nhập đầy đủ thông tin ^-^',
					display : 'hide-alert'
				})
			}, 2000);
		}
	}
	
	
	
	
 }
exportExcel = () =>{
	var data = {};
	if(this.props.ontap.room.display == 'show-alert')
	{
		data = {board : 'suppliers'}
	}
	else
	{
		data = {board : 'customers'}
	}
	export_Data.export_Data(data)

	
}

  render() 
  
  {
  console.log(this.props.form)
    return (

    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
	


	
	<Alert/>
	
	
<div class="row act">
	
	
	
	<div class="col-md-5">
			<h3 class="dashboard-title">DANH SÁCH KHÁCH HÀNG /  NHÀ CUNG CẤP</h3>
	</div>
	<div class="col-md-7 text-right action">
	<button class="btn btn-success size-button" id = {this.props.ontap.btnTable}  onClick = {() =>{this.props.OntapRoom(
			{type : {
				mtable_ontap : {
						type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
						event : 'show-modal',
							}, 
				mtable_text :{
						type : 'MODAL_HEADER_FOR_INSERT_UPDATE_TABLE',
						event : 'Thêm dữ liệu'},
						style_event : {
							type : 'STATUS_STYLE_EVENT',
							status : true
						  },
						  onchangetable_idtable : {
							type : 'CHANGE_TABLE_IDTABLE',
							text : ''
						  },
						  onchangetable_name : {
							type : 'CHANGE_TABLE_NAME',
							text : ''
						  },
						  onchangetable_idarea : {
							type : 'CHANGE_TABLE_IDAREA',
							text : ''
						  },
						 
				
					},
			}
	)}} data-toggle="modal" data-target="#ModalAddGroup"><i class="fa fa-user-plus"></i> Thêm Nhà Cung Cấp</button>
		
		<button class="btn btn-success size-button " id = {this.props.ontap.btnRoom} onClick = {() =>{this.props.OntapRoom(
			{type : {
				mroom_ontap : {
						type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
						event : 'show-modal',
							}, 
				mroom_text :{
						type : 'MODAL_HEADER_FOR_INSERT_UPDATE_ROOM',
						event : 'Thêm dữ liệu'},
				style_event : {
					type : 'STATUS_STYLE_EVENT',
					status : true,
					//true for event INSERT
					//false for event UPDATE
				},
				inputIdRoom : {
					type : 'CHANGE_ROOM_IDROOM',
					data : ''
				},
				inputIdIdRoom : {
					type : 'CHANGE_ROOM_IDIDROOM',
					data : ''
				},
				inputNameRoom : {
					type : 'CHANGE_ROOM_NAMEROOM',
					data : ''
				}

					},
			}
	)}}><i class="fa fa-plus" aria-hidden="true"></i> Thêm Khách Hàng</button>
		
		<button class="btn btn-success size-button"
		onClick = {()=>{this.exportExcel()}}
		>
			<i class="fa fa-sign-out" aria-hidden="true"></i> Xuất file
		</button>
		
		
		<div class={`modal fade ${this.props.modal.mRoom.classOntap}`}  id="modal-id">
			<div class="modal-dialog margin-modal-customer">
				<div class="modal-content">
					<div class="modal-header background-modal">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title">{this.props.modal.mRoom.text}</h4>
					</div>
					< ModalbodyCustomer/>
					
					<div class="modal-footer">
						<button type="button" class="btn btn-danger"onClick = {() =>{this.props.OntapRoom(
			{type : {
				mroom_ontap : {
						type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
						event : 'hide-modal',
							}, 
			
					}

	})}}><i class="fa fa-close" aria-hidden="true"></i>&nbsp;&nbsp;Close</button>
						<button type="button" class="btn btn-primary" onClick = {() => this.submit(this.props.eventUpIn, (status)=>{
							this.props.showAlert({type : {status_event :{
								type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
								status:status
							}}})
						})}><i class="fa fa-save" aria-hidden="true"></i>&nbsp;&nbsp;Save changes</button>
					</div>
				</div>
			</div>
		</div>

		<div class={`modal fade ${this.props.modal.mTable.classOntap}`}  id="modal-id">
			<div class="modal-dialog margin-modal-customer">
				<div class="modal-content">
					<div class="modal-header background-modal">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title">{this.props.modal.mTable.text}</h4>
					</div>
				<ModalbodyTable/>
					<div class="modal-footer">
						<button type="button" class="btn btn-danger" onClick = {() =>{this.props.OntapRoom(
			{type : {
				mtable_ontap : {
						type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
						event : 'hide-modal',
							}, 
			
					}

	})}}><i class="fa fa-close" aria-hidden="true"></i>&nbsp;&nbsp;Close</button>
                        <button type="button" class="btn btn-primary" onClick = {() => this.submit_table(this.props.eventUpIn, (status)=>{
							this.props.showAlert({type : {status_event :{
								type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
								status:status
							}}})
						})}><i class="fa fa-save" aria-hidden="true"></i>&nbsp;&nbsp;Save changes</button>
					</div>
				</div>
			</div>
		</div>
       
	
		
	</div>
</div>

	<Tabs/>
</div>
</div>

   
    );
  }
}
const  mapStateToProps = state =>{
  console.log(state);
    return{
	  modal: state.customer.showModal,
	  eventUpIn : state.customer.eventUpdate_Insert,
	  //form : state.customer.formroom,
	  form : state.customer.form_onChange,
	  formtable : state.customer.formtable,
	  event : state.customer.event,
	  ontap : state.customer.onTap
    }
  }

const mapDispatchToProps = (dispatch, props) =>{
  return {
	onInsertRoom: (data) =>{
		dispatch(action. acInsertCustomerRequest(data))
	},
	upDateTable : (data) =>{
		dispatch(action.acUpdateTableRequest(data))
	},
	inSertTable : (data) =>{
		dispatch(action.acInsertTableRequest(data))
	},
	updateCustomer : (data)=>{
		dispatch(action. acUpdateCustomerRequest(data))
	},
	OntapRoom : (tap) =>{
		dispatch(tap)
	},
	showAlert : (id) =>{
		dispatch(id)
	}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Content);