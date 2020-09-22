import * as Types from './../../../constants/ActionType';

const list_area = [];
const list_cate = [];


export const area = (state = list_area , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_list_area === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.get_list_area.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.GET_LIST_AREAS :
        newState = action.type.get_list_area.data;
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




export const cate = (state = list_cate , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_list_cate === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.get_list_cate.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.GET_LIST_CATES :
        newState = action.type.get_list_cate.data;
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
