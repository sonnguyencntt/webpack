import * as Types from './../../../constants/ActionType';




export const room   = (state = '' , action) =>
{
    let newState = state;

    if(typeof action.type.inputIdRoom === "undefined"){
        return newState
    }
    else{
        switch(action.type.inputIdRoom.type){ 
            // case Types.FETCH_PRODUCTS:
            //   newState = action.product
            case Types.CHANGE_ROOM_IDROOM :
                newState = action.type.inputIdRoom.data;
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
export const id  = (state = 1 , action) =>
{
    let newState = state;

    if(typeof action.type.inputIdIdRoom === "undefined"){
        return newState
    }
    else{
        switch(action.type.inputIdIdRoom.type){ 
            // case Types.FETCH_PRODUCTS:
            //   newState = action.product
            case Types.CHANGE_ROOM_IDIDROOM :
                newState = action.type.inputIdIdRoom.data;
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

    if(typeof action.type.inputNameRoom === "undefined"){
        return newState
    }
    else{
        switch(action.type.inputNameRoom.type){ 
            // case Types.FETCH_PRODUCTS:
            //   newState = action.product
            case Types.CHANGE_ROOM_NAMEROOM :
                newState = action.type.inputNameRoom.data;
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
export const search   = (state = '' , action) =>
{
    let newState = state;

    if(typeof action.type.inputsearch === "undefined"){
        return newState
    }
    else{
        switch(action.type.inputsearch.type){ 
            // case Types.FETCH_PRODUCTS:
            //   newState = action.product
            case Types.CHANGE_ROOM_NAME_SEARCH :
                newState = action.type.inputsearch.data;
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

