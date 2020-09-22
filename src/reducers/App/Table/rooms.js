import * as Types from './../../../constants/ActionType';

const initialState = [{}];


const rooms = (state = initialState , action) =>
{
console.log(state);
  let newState = [...state];
  if(typeof action.type.fetch_room === "undefined")
  {
    return newState
  }
  else{
    switch(action.type.fetch_room.type){ 
      case Types.FETCH_ROOMS:
    
        newState = action.type.fetch_room.data;
        return newState;        
        default: 
       return newState;
    }
  }
  
}
export default rooms;