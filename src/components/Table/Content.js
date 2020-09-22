import React, { Component } from 'react';
import Tabs from './Tabs';
import { connect } from 'react-redux';

import ModalbodyRoom from './MBodyRoom';
import * as logic from './../../actions/logic';
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

	if(logic.logic_Before_Sentdata([this.props.form.room, this.props.form.name]) == true)
	{
		
		var parseJson = {
			id : this.props.form.room,
			value : this.props.form.name,
			type : 'ROOM'
		};
		
		if(statusEvent == true)
		{
			this.props.onInsertRoom(parseJson, statusEvent);
		}
		else{
			this.props.onInsertRoom({id : this.props.form.id,
									idarea : this.props.form.room,
									name : this.props.form.name,
									type : 'ROOM'
			}, statusEvent);
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

	if(logic.logic_Before_Sentdata([this.props.formtable.idtable, this.props.formtable.name, this.props.formtable.idarea]) == true)
	{
		
		
		
		if(statusEvent == true)
		{
			this.props.inSertTable(
				{idtable : this.props.formtable.idtable,
				name : this.props.formtable.name,
				idarea : this.props.formtable.idarea,
				room : this.props.event.room,
				table : this.props.event.table,
				status : this.props.event.status,
				index : 1,
				type : 'TABLE'
		
			})
		}
		else{
			this.props.upDateTable({idtable : this.props.formtable.idtable,
				name : this.props.formtable.name,
				idarea : this.props.formtable.idarea,
				room : this.props.event.room,
				table : this.props.event.table,
				status : this.props.event.status,
				index : 1,
				type : 'TABLE'

		
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
		data = {board : 'areas'}
	}
	else
	{
		data = {board : 'tables'}
	}
	export_Data.export_Data(data)

	
}

  render() 
  
  {
  console.log('da vao content')
    return (

    
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
		
 
 <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 responsive-sidebar">
   
 </div>
 
<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 margin_contend">
	


	
	<Alert/>
	
	
<div class="row act">
	
	
	
	<div class="col-md-5">
			<h3 class="dashboard-title">DANH SÁCH PHÒNG/BÀN</h3>
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
	)}} data-toggle="modal" data-target="#ModalAddGroup"><i class="fa fa-list" aria-hidden="true"></i> Thêm Bàn</button>
		
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
	)}}><i class="fa fa-plus" aria-hidden="true"></i> Thêm Phòng / Tầng</button>
		
		<button class="btn btn-success size-button"
		onClick = {()=>{this.exportExcel()}}
		>
			<i class="fa fa-sign-out" aria-hidden="true"></i> Xuất file
		</button>
		
		
		<div class={`modal fade ${this.props.modal.mRoom.classOntap}`}  id="modal-id">
			<div class="modal-dialog margin-modal">
				<div class="modal-content">
					<div class="modal-header background-modal">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title">{this.props.modal.mRoom.text}</h4>
					</div>
					<ModalbodyRoom/>
					
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
			<div class="modal-dialog margin-modal-table">
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
	  modal: state.table.showModal,
	  eventUpIn : state.table.eventUpdate_Insert,
	  form : state.table.formroom,
	  formtable : state.table.formtable,
	  event : state.table.event,
	  ontap : state.table.onTap
    }
  }

const mapDispatchToProps = (dispatch, props) =>{
  return {
	onInsertRoom: (data, status) =>{
		dispatch(action. acInsertRoomsRequest(data, status))
	},
	upDateTable : (data) =>{
		dispatch(action.acUpdateTableRequest(data))
	},
	inSertTable : (data) =>{
		dispatch(action.acInsertTableRequest(data))
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