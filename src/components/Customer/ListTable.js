import React, { Component } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import * as action from '../../actions/index';
import {connect} from 'react-redux';

import Emty from './Emty';
import * as Types from './../../constants/ActionType'
import Table from './Table';


class ListTable extends Component {
  

  // shouldComponentUpdate(nextProps, nextState)
	// {
  //  if((JSON.stringify(nextProps.table.data) == JSON.stringify(this.props.table.data)) && (nextProps.table.index == this.props.table.index))
	// 	{
  //     return false;
  //   }
  //   return true;
	// }

onDelete = (data) =>{
  this.props.onDeleteTable({
                                index : 1,
                                id : this.props.form.id_name_search_supplier,
                                debit : Number(this.props.form.debit_search_supplier),
                                indexsupplier : data,
                                type : 'SUPPLIER'
  })
}
    componentWillMount(){
      console.log('da vao willnha')
      this.props.fetchAllTables({index : 1,
                                id : this.props.form.id_name_search_supplier,
                                debit : Number(this.props.form.debit_search_supplier),
                                type : 'SUPPLIER',

        }
     );
    }
    showData = (datas,id, style) =>
    {
    var result = null;
    if(datas.length > 0)
    {
      
      result = datas.map((data,index) =>
      {
        var statusName = (data.idStatus == 1) ? 'Đang sử dụng'  : 'Trống';
        var statusClass = (data.idStatus == 1) ? 'success' : 'default';
     return (
 
      <tr>
      <td>{((id-1) * 5) + index+1}</td>
    <td>{data.Idsupplier}</td>
    <td>{data.Namesupplier}</td>
    <td>{data.Email}</td>
    {/* <td>{data.idStatus}</td> */}
    <td>{data.Phone}</td>
    <td>{data.Address}</td>
    <td>{data.Debit}</td>
    <td><img style = {style} src={data.Avatar} alt=""/></td>
    <td>{data.Note}</td>




   

    <td>
        
         
        <button type="button" 
        class="btn btn-primary"  onClick = {() => this.onUpdate(data.id)}><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
        
        <button type="button" 
        class="btn btn-danger margin-button"
        onClick = {() => this.onDelete(data.id)}
        ><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;Delete</button>
        
        

     
    </td>

  </tr>
      
      
       );
      })
    }
    else
    {
      return (
        <Emty/>
      )
    }
   return result
    };

onUpdate = (data) =>{
const tables = this.props.table.data.map((table, index)=>{
if(table.id == data)
{
  this.props.showModal({type : {
    mtable_ontap : {
        type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
        event : 'show-modal',
          }, 
          mtable_text : {
          type : 'MODAL_HEADER_FOR_INSERT_UPDATE_TABLE',
          event : 'Chỉnh sửa dữ liệu'
          },
          style_event : {
            type : 'STATUS_STYLE_EVENT',
            status : false
          },
          // onchangetable_idtable : {
          //   type : 'CHANGE_TABLE_IDTABLE',
          //   text : table.IdTable
          // },
          // onchangetable_name : {
          //   type : 'CHANGE_TABLE_NAME',
          //   text : table.TableName
          // },
          // onchangetable_idarea : {
          //   type : 'CHANGE_TABLE_IDAREA',
          //   text : table.IdArea
          // }
          onchangesupplier_idsupplier :{
            type : Types.CHANGE_CUSTOMER_IDSUPPLIER,
            text : table.Idsupplier
        },onchangesupplier_namesupplier :{
          type : Types.CHANGE_CUSTOMER_NAMESUPPLIER,
          text : table.Namesupplier
      },
      onchangesupplier_emailsupplier :{
        type : Types.CHANGE_CUSTOMER_EMAILSUPPLIER,
        text : table.Email
    },
    onchangesupplier_phonesupplier :{
      type :Types.CHANGE_CUSTOMER_PHONESUPPLIER,
      text : table.Phone
  },
  onchangesupplier_addresssupplier :{
    type : Types.CHANGE_CUSTOMER_ADDRESSSUPPLIER,
    text : table.Address
},
onchangesupplier_notesupplier :{
  type : Types.CHANGE_CUSTOMER_NOTESUPPLIER,
  text : table.Note
},
onchangesupplier_debitsupplier :{
  type :Types.CHANGE_CUSTOMER_DEBITSUPPLIER,
  text : table.Debit
}, onchangesupplier_avatarsupplier :{
  type: Types.CHANGE_CUSTOMER_AVATARSUPPLIER,
  text : table.Avatar
},
onchange_index_supplier :{
  type: Types.CHANGE_INDEX_SUPPLIER,
  text : table.id
}



        }
       
  
  
  })
}
})

 
}

  callbackFunction = (data) => 
  {
  
    this.setState({
      id : data.id,
      idarea : data.IdArea,
      name : data.BranchName,
      onTap : 'modal fade show-modal'
    })
  }
  callbackfunctionforSubmitupdate = (id, status) =>{
    this.setState({onTap : status}, ()=>{
      this.props.onUpdateTable(id)
    })

  }
  callbackfunctionForonChange = (name, value) =>{
   
    this.setState({
      [name] : value
    })
 
  }
 
 

  render() 
  
  {
      const style = {width : '100px'}
    return (
     <tbody>
						{this.showData(this.props.table.data, this.props.table.index, style)}




           
            
             </tbody>
       
    )
    

}
}



const  mapStateToProps = state =>{
  console.log(state.customer.table);

  return{
   table : state.customer.table,
   event : state.customer.event,
  form : state.customer.form_onChange
  }
};


const mapDispatchToProps = (dispatch, props) =>{
  return {
    showModal : (tap) =>{
      dispatch(tap)
    },
    fetchAllTables : (data) =>{
      dispatch(action.acFetchTableRequest(data));
     
    },
    onDeleteTable : (data) =>{
      dispatch(action.acDeleteTableRequest(data))
    }
    // onDeleteProduct : (id) =>{
     
    //   dispatch(action.acDeleteProductsRequest(id));
    // },
    // onUpdateTable : (id) =>{
     
    //   dispatch(action.acUpdateProductsRequest(id));
    // }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListTable);