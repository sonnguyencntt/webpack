import * as Types from './../../constants/ActionType';






 const menu = (state = [] , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_menu === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.get_menu.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.GET_MENU :
        newState = action.type.get_menu.data;
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
export default menu
