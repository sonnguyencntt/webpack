import * as Types from '../../../constants/ActionType';


const initial_room ={
    display : 'hide-modal',
    action : '',
    textcolor : 'default-color',
  }
 const initial_table ={
    display : 'show-alert',
    action : 'active',
    textcolor : 'colorforontap',
}



export const room = (state = initial_room , action) =>
{
    console.log(action)
    let newState = {...state};

    if(typeof action.type.ontapRoom === "undefined"){
        return newState
    }
    else{
        
  switch(action.type.ontapRoom.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.ONTAP_CHANGE_ROOM :
        newState = action.type.ontapRoom.ontap;
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
export const table = (state = initial_table , action) =>
{
    console.log(action)
    let newState = {...state};

    if(typeof action.type.ontapTable === "undefined"){
        return newState
    }
    else{
  switch(action.type.ontapTable.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.ONTAP_CHANGE_TABLE :
        newState = action.type.ontapTable.ontap;
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

export const btnTable = (state = '' , action) =>
{
    console.log(action)
    let newState = state;

    if(typeof action.type.onbtnTable === "undefined"){
        return newState
    }
    else{
  switch(action.type.onbtnTable.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.ONTAP_CHANGE_BUTTON_TABLE :
        newState = action.type.onbtnTable.ontap;
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
export const btnRoom = (state = 'hide-alert' , action) =>
{
    console.log(action)
    let newState = state;

    if(typeof action.type.onbtnRoom === "undefined"){
        return newState
    }
    else{
  switch(action.type.onbtnRoom.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.ONTAP_CHANGE_BUTTON_ROOM :
        newState = action.type.onbtnRoom.ontap;
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