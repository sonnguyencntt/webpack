import * as Types from './../../../constants/ActionType';

const list_area = [];
const list_menu = [];



export const table = (state = list_area , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_list_table === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.get_list_table.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.GET_LIST_TABLES :
        newState = action.type.get_list_table.data;
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
export const menu = (state = list_menu , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_list_menu === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.get_list_menu.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.GET_LIST_MENU :
        newState = action.type.get_list_menu.data;
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
