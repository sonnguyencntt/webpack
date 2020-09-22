import * as Types from '../../../constants/ActionType';

const event_table = ''
const event_room = '';
const event_status = '';


export const table = (state = event_table , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_table === "undefined"){
    return newState
  }
  else
  {

  
  switch(action.type.onchange_table.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.ONCHANGE_TABLE :
        newState = action.type.onchange_table.text;
        return newState;   
        // case Types.DELETE_PRODUCT :
        //   newState = action.product;
        //   return newState; 
        //   case Types.UPDATE_PRODUCT :
        //     newState = action.product;
        //     return newState;     
      default: return newState;
  }
}
}
export const room = (state = event_room , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_room == "undefined"){
    return newState
  }
  else
  {

  
  switch(action.type.onchange_room.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.ONCHANGE_ROOM :
        newState = action.type.onchange_room.text;
        return newState;   
        // case Types.DELETE_PRODUCT :
        //   newState = action.product;
        //   return newState; 
        //   case Types.UPDATE_PRODUCT :
        //     newState = action.product;
        //     return newState;     
      default: return newState;
  }
}
}
export const status = (state = event_status , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_status == "undefined"){
    return newState
  }
  else
  {

  
  switch(action.type.onchange_status.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.ONCHANGE_STATUS :
        newState = action.type.onchange_status.text;
        return newState;   
        // case Types.DELETE_PRODUCT :
        //   newState = action.product;
        //   return newState; 
        //   case Types.UPDATE_PRODUCT :
        //     newState = action.product;
        //     return newState;     
      default: return newState;
  }
}
}
;