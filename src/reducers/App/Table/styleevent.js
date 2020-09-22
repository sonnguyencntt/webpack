import * as Types from './../../../constants/ActionType';



const styleevent = (state = true , action) =>
{
  let newState = state;
  if(typeof action.type.style_event === "undefined")
  {
    return newState
  }
  else
  {
  switch(action.type.style_event.type){ 
  
    case Types.STATUS_STYLE_EVENT:
    
        newState = action.type.style_event.status;
        return newState;   

      default: return newState;
  }
}
}
export default styleevent;