import * as Types from '../../../constants/ActionType';

// const initialState = {data : [{}],
//    count : 0,
//    index : 1
// };

///// count, index , data
export const data = (state = [{}] , action) =>
{

  let newState = [...state];

  if(typeof action.type.fetch_customer === "undefined"){
  return newState
}
else
{


  switch(action.type.fetch_customer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
   
        case Types.FETCH_CUSTOMER :
            newState = action.type.fetch_customer.data;
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
export const count = (state = 0 , action) =>
{
  let newState = state;

  if(typeof action.type.customer_count == "undefined"){
    return newState
  }
else
{


  switch(action.type.customer_count.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
   
        case Types.FETCH_COUNT_CUSTOMER :
            newState = action.type.customer_count.count;
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
export const index = (state = 1 , action) =>
{

  let newState = state;
  if(typeof action.type.customer_index == "undefined"){
    return newState
  }
  else
  {
    switch(action.type.customer_index.type ){ 
      // case Types.FETCH_PRODUCTS:
      //   newState = action.product
     
          case Types.FETCH_INDEX_CUSTOMER :
              newState = action.type.customer_index.index ;
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

