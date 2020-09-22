import * as Types from './../../../constants/ActionType';

// const initialState = {data : [{}],
//    count : 0,
//    index : 1
// };

///// count, index , data
export const data = (state = [{}] , action) =>
{

  let newState = [...state];

  if(typeof action.type.fetch_table === "undefined"){
  return newState
}
else
{


  switch(action.type.fetch_table.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
   
        case Types.FETCH_TABLES :
            newState = action.type.fetch_table.data;
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

  if(typeof action.type.table_count == "undefined"){
    return newState
  }
else
{


  switch(action.type.table_count.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
   
        case Types.FETCH_COUNT_TABLES :
            newState = action.type.table_count.count;
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
  if(typeof action.type.table_index == "undefined"){
    return newState
  }
  else
  {
    switch(action.type.table_index.type ){ 
      // case Types.FETCH_PRODUCTS:
      //   newState = action.product
     
          case Types.FETCH_INDEX_TABLES :
              newState = action.type.table_index.index ;
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

