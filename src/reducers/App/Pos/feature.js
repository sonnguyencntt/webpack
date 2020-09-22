import * as Types from './../../../constants/ActionType';

const list_forSearch = [{non_Query : 'non_query'}];
const append_menu = [];


export const search = (state = list_forSearch , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_list_forsearchMenu === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.get_list_forsearchMenu.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.GET_LIST_FEATURE_SEARCH_MENU :
        newState = action.type.get_list_forsearchMenu.data;
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
export const show_list_table = (state = append_menu , action) =>
{
  let newState = [...state];
  if(typeof action.type.feature_appendmenu === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.feature_appendmenu.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.FEATURE_APPENDMENU :
        newState = action.type.feature_appendmenu.data;
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

export const tabControll = (state = 'table' , action) =>
{
  let newState = state;
  if(typeof action.type.tab_pos_controll === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.tab_pos_controll.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.TAB_POS_CONTROLL :
        newState = action.type.tab_pos_controll.data;
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
export const tabBackgroundControllT = (state = {backgroundColor : '#eb9898'} , action) =>
{
  let newState = {...state};
  if(typeof action.type.tabbackgroundT_pos_controll === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.tabbackgroundT_pos_controll.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.TABBACKGROUND_T_POS_CONTROLL :
        newState = action.type.tabbackgroundT_pos_controll.data;
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
export const tabBackgroundControllM = (state = {backgroundColor : ''} , action) =>
{
  let newState = {...state};
  if(typeof action.type.tabbackgroundM_pos_controll === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.tabbackgroundM_pos_controll.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.TABBACKGROUND_M_POS_CONTROLL :
        newState = action.type.tabbackgroundM_pos_controll.data;
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
export const search_customer = (state = [] , action) =>
{
  let newState = [...state];
  if(typeof action.type.search_customer_pos === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.search_customer_pos.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.SEARCH_CUSTOMER_POS :
        newState = action.type.search_customer_pos.data;
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
export const show_customer = (state = null , action) =>
{
  let newState = {...state};
  if(typeof action.type.show_customer_pos === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.show_customer_pos.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.SHOW_CUSTOMER_POS :
        newState = action.type.show_customer_pos.data;
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
export const show_table = (state = {} , action) =>
{
  let newState = {...state};
  if(typeof action.type.show_table_pos === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.show_table_pos.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.SHOW_TABLE_POS :
        newState = action.type.show_table_pos.data;
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
export const idbill_default = (state = null , action) =>
{
  let newState = state;
  if(typeof action.type.idbill_default_pos === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.idbill_default_pos.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.IDBILL_POS_DEFAULT :
        newState = action.type.idbill_default_pos.data;
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








