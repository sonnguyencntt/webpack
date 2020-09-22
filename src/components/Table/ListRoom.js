import React, { Component, PureComponent } from 'react';

// import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../../../node_modules/bootstrap/dist/js/bootstrap.min';
import * as action from '../../actions/index';
import {connect} from 'react-redux';
// import ListData from './ListData';

import Emty from './Emty';



class ListRoom extends Component {
  
  shouldComponentUpdate(nextProps, nextState)
	{
   if(JSON.stringify(nextProps.rooms) == JSON.stringify(this.props.rooms))
		{
      return false;
    }
    return true;
	}
  

  onDelete = (id) =>{
    this.props.onDeleteRoom(id)
  }
    componentWillMount(){
      console.log('roomwill')
      this.props.fetchAllRooms({type :  'ROOM'});

    }
    showData = (datas) =>
    {
    var result = null;
    if(datas.length > 0)
    {
      
      result = datas.map((data,index) =>
      {
     return (
      <tr>
      <td>{index+1}</td>
    <td>{data.IdArea}</td>
    <td>{data.BranchName}</td>
    <td>
        
         
        <button type="button" 
        class="btn btn-primary"  onClick = {() =>{
          this.tapFunction(data.id)
        //   this.props.OntapRoom(
        //     {type : {
        //       mroom_ontap : {
        //           type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
        //           event : 'show-modal',
        //             }, 
        //       mroom_text :{
        //           type : 'MODAL_HEADER_FOR_INSERT_UPDATE_ROOM',
        //           event : 'Chỉnh sửa dữ liệu'}
        //         }
      
        // })
        }}><i class="fa fa-edit"></i>&nbsp;&nbsp;Update</button>
        
        <button type="button" 
        class="btn btn-danger margin-button"
        onClick = {() => this.onDelete({id : data.id, type : 'ROOM'})}
        ><i class="fa fa-trash" aria-hidden="true"></i>&nbsp;&nbsp;Delete</button>
        
        

     
    </td>

  </tr>
      //  <ListData
      //  index = {index+1}
      //  data = {data}
      //  callback = {this.callbackFunction}
      //  >

      //  </ListData>
 
      
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
  
  
  
  tapFunction = (id) =>{
   
    const room = this.props.rooms.map((room,index) =>
    {
      if(room.id === id){
        this.props.OntapRoom( {type : {
                mroom_ontap : {
                    type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
                    event : 'show-modal',
                      }, 
                mroom_text :{
                    type : 'MODAL_HEADER_FOR_INSERT_UPDATE_ROOM',
                    event : 'Chỉnh sửa dữ liệu'},
                inputIdRoom :{
                  type : 'CHANGE_ROOM_IDROOM',
                  data : room.IdArea
                },
                inputIdIdRoom :{
                  type : 'CHANGE_ROOM_IDIDROOM',
                  data : room.id
                },
                inputNameRoom : {
                  type : 'CHANGE_ROOM_NAMEROOM',
                  data : room.BranchName
                },
                style_event : {
                  type : 'STATUS_STYLE_EVENT',
                  status : false
                }
                  }
        
          })
      }
      else{
        return;
      }
    })
  


}
  

  render() 

  {
    console.log('da vao listroom');

    return (
      
     <tbody>
						{this.showData(this.props.rooms)}


             {/* <Modal 
             state = {this.state}
             callbackOnchange = {this.callbackfunctionForonChange}
             callbackforsubmit = {this.callbackfunctionforSubmitupdate}
             /> */}
            
             </tbody>
       
    )
    

}
}



const  mapStateToProps = state =>{

  return{
    rooms: state.table.rooms
  }
}


const mapDispatchToProps = (dispatch, props) =>{
  return {
    fetchAllRooms : (data) =>{
      dispatch(action.acFetchRoomsRequest(data));
    },
    onDeleteRoom : (id) =>{
     
      dispatch(action.acDeleteRoomsRequest(id));
    },
   
    OntapRoom : (data) =>{
      dispatch(data)
    },
  
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ListRoom);