import * as Types from './../../../constants/ActionType';




export const idtable   = (state = '' , action) =>
{
  console.log(action.type.onchangetable_idtable)
  let newState = state;
  if(typeof action.type.onchangetable_idtable == "undefined"){
    return newState
  }
  else

{
  


  switch(action.type.onchangetable_idtable.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_TABLE_IDTABLE :
        newState = action.type.onchangetable_idtable.text;
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
export const name   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangetable_name == "undefined"){
    return newState
  }
  else
  {

  
  switch(action.type.onchangetable_name.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_TABLE_NAME :
        newState = action.type.onchangetable_name.text;
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
export const idarea  = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangetable_idarea == "undefined"){
    return newState
  }
  else
  {

  
  switch( action.type.onchangetable_idarea.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_TABLE_IDAREA :
        newState =  action.type.onchangetable_idarea.text;
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
export const status   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangetable_status == "undefined"){
    return newState
  }
  switch(action.type.onchangetable_status.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_TABLE_STATUS :
        newState = action.type.onchangetable_status.text;
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
export const bill   = (state = '' , action) =>
{
  let newState = state;
  return newState
}

