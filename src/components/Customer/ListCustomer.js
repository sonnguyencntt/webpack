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
                                id : this.props.form.id_name_search_customer,
                                debit : Number(this.props.form.debit_search_customer),
                                indexcustomer : data,
                                type : 'CUSTOMER'
  })
}
    componentWillMount(){
      this.props.fetchAllTables({index : 1,
                                id : this.props.form.id_name_search_customer,
                                debit : Number(this.props.form.debit_search_customer),
                                type : 'CUSTOMER',

        }
     );
    }
    showData = (datas, id) =>
    {
    var result = null;
    var style = {width : '100px'}
    if(datas.length > 0)
    {
      
      result = datas.map((data,index) =>
      {
        var statusName = (data.idStatus == 1) ? 'Đang sử dụng'  : 'Trống';
        var statusClass = (data.idStatus == 1) ? 'success' : 'default';
     return (
 
      <tr>
      <td>{((id-1) * 5) + index+1}</td>
    <td>{data.IdCustomer}</td>
    <td>{data.CustomerName}</td>
    <td>{data.PhoneNumber}</td>
    {/* <td>{data.idStatus}</td> */}
    <td>{data.Email}</td>
    <td>{data.Address}</td>
    <td>{data.Birthday}</td>
    <img style = {style} src={data.Avatar} alt=""/>
    <td>{data.Debit}</td>

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
const tables = this.props.customer.data.map((table, index)=>{
if(table.id == data)
{
  this.props.showModal({type : {
    mroom_ontap : {
        type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
        event : 'show-modal',
          }, 
          mroom_text : {
          type : 'MODAL_HEADER_FOR_INSERT_UPDATE_ROOM',
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
          onchange_idcustomer :{
            type : Types.CHANGE_IDCUSTOMER,
            text : table.IdCustomer
        },onchange_namecustomer :{
          type : Types.CHANGE_NAMECUSTOMER,
          text : table.CustomerName
      },
      onchange_emailcustomer :{
        type : Types.CHANGE_EMAILCUSTOMER,
        text : table.Email
    },
    onchange_phonecustomer :{
      type :Types.CHANGE_PHONECUSTOMER,
      text : table.PhoneNumber
  },
  onchange_addresscustomer :{
    type : Types.CHANGE_ADDRESSCUSTOMER,
    text : table.Address
},
onchange_notecustomer :{
  type : Types.CHANGE_NOTECUSTOMER,
  text : table.Note
},
onchange_debitcustomer :{
  type :Types.CHANGE_DEBITCUSTOMER,
  text : table.Debit
}, onchange_avatarcustomer :{
  type: Types.CHANGE_AVATARCUSTOMER,
  text : table.Avatar
},
onchange_index_customer :{
  type: Types.CHANGE_INDEX_CUSTOMER,
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
						{this.showData(this.props.customer.data, this.props.customer.index, style)}




           
            
             </tbody>
       
    )
    

}
}



const  mapStateToProps = state =>{
  console.log(state.customer.table);

  return{
   table : state.customer.table,
   customer : state.customer.customer,
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
      dispatch(action.acFetchCustomerRequest(data));
     
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