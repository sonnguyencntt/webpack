import * as Types from './../../../constants/ActionType';




export const totalPrice = (state = 0 , action) =>
{
    let newState = state;

  if(typeof action.type.payment_total === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.payment_total.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.PAYMENT_TOTAL :
        newState = action.type.payment_total.data;
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
export const guestMoney = (state = 0 , action) =>
{
  let newState = state;
  if(typeof action.type.guest_money === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.guest_money.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.GUEST_MONEY :
        newState = action.type.guest_money.data;
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
export const extraMoney = (state = 0 , action) =>
{
  let newState = state;
  if(typeof action.type.extra_money === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.extra_money.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.EXTRA_MONEY :
        newState = action.type.extra_money.data;
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

