import * as Types from '../../../constants/ActionType';

const initialState = {};


const status = (state = initialState , action) =>
{
  let newState = {...state};
  if(typeof action.type.status_event === "undefined")
  {
    return newState
  }
  else
  {
  switch(action.type.status_event.type){ 
  
    case Types.STATUS_EVENT_UPDATE_DELETE_INSERT :
    
        newState = action.type.status_event.status;
        return newState;   

      default: return newState;
  }
}
}
export default status;