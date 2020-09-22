import React, { Component } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import * as action from '../../actions/index';
import {connect} from 'react-redux';

import Emty from './Emty';


class ListTable extends Component {
  

  shouldComponentUpdate(nextProps, nextState)
	{
   if((JSON.stringify(nextProps.table.data) == JSON.stringify(this.props.table.data)) && (nextProps.table.index == this.props.table.index))
		{
      return false;
    }
    return true;
	}

onDelete = (data) =>{
  this.props.onDeleteTable({
                                index : 1,
                                room: this.props.event.room,
                                table: this.props.event.table,
                                status: this.props.event.status,
                                idtable : data,
                                type : 'TABLE'
  })
}
    componentWillMount(){
      
      this.props.fetchAllTables({index : 1,
                                room: this.props.event.room,
                                table: this.props.event.table,
                                status: this.props.event.status,
                                type : 'TABLE',

        }
     );
    }
    showData = (datas,id) =>
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
    <td>{data.IdTable}</td>
    <td>{data.TableName}</td>
    <td>
             
             <span class={`size label label-${statusClass}`}>
                {statusName}
             </span>
             
           </td>
    {/* <td>{data.idStatus}</td> */}
    <td>{data.IdArea}</td>
    <td>{data.idBill}</td>



    <td>
        
         
        <button type="button" 
        class="btn btn-primary"  onClick = {() => this.onUpdate(data.IdTable)}><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
        
        <button type="button" 
        class="btn btn-danger margin-button"
        onClick = {() => this.onDelete(data.IdTable)}
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
if(table.IdTable == data)
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
          onchangetable_idtable : {
            type : 'CHANGE_TABLE_IDTABLE',
            text : table.IdTable
          },
          onchangetable_name : {
            type : 'CHANGE_TABLE_NAME',
            text : table.TableName
          },
          onchangetable_idarea : {
            type : 'CHANGE_TABLE_IDAREA',
            text : table.IdArea
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
      
    return (
     <tbody>
						{this.showData(this.props.table.data, this.props.table.index)}




           
            
             </tbody>
       
    )
    

}
}



const  mapStateToProps = state =>{
  
console.log(state);
  return{
   table : state.table.table,
   event : state.table.event

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