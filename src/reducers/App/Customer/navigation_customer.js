import * as Types from '../../../constants/ActionType';

const initialState = 1;


const navigation = (state = initialState , action) =>
{
  let newState = state;
  
  if(typeof action.type.navigation_customer == "undefined")
  {
    return newState
  }
 else
 {

 
  switch(action.type.navigation_customer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_NAVIGATION_CUSTOMER :
        newState = action.type.navigation_customer.navi;
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
export default navigation;