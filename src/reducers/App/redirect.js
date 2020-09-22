import * as Types from './../../constants/ActionType';

const initialState = 'not_verfication';

  export const redirect = (state = initialState, action) =>
  {
     
   let newState = state;

   if(typeof action.type.redirect === "undefined"){
       return newState
   }
   else{
       switch(action.type.redirect.type){ 
           // case Types.FETCH_PRODUCTS:
           //   newState = action.product
           case Types.REDIRECT_PAGES :
               newState = action.type.redirect.data;
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
 export const User = (state = {}, action) =>
  {
     
   let newState = {...state};

   if(typeof action.type.get_idUser === "undefined"){
       return newState
   }
   else{
       switch(action.type.get_idUser.type){ 
           // case Types.FETCH_PRODUCTS:
           //   newState = action.product
           case Types.GET_ID_USER :
               newState = action.type.get_idUser.data;
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

