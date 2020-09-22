import * as Types from '../../../constants/ActionType';

const initialState = {
  total_revenue : 0,
  count_bill : 0,
  total_debit_bill : 0,
  sum_debit_bill : 0,
  count_unpaid_bill : 0,
  total_unpaid_bill : 0
};


const get_statistical = (state = initialState , action) =>
{
  let newState = {...state};
  if(typeof action.type.get_statistical === "undefined")
  {
    return newState
  }
  else
  {
  switch(action.type.get_statistical.type){ 
  
    case Types.GET_STATISTICAL :
    
        newState = action.type.get_statistical.data;
        return newState;   

      default: return newState;
  }
}
}
export default get_statistical
// export const count_bill = (state = initialState , action) =>
// {
//   let newState = state;
//   if(typeof action.type.count_bill === "undefined")
//   {
//     return newState
//   }
//   else
//   {
//   switch(action.type.count_bill.type){ 
  
//     case Types.GET_COUNT_BILL :
    
//         newState = action.type.count_bill.data;
//         return newState;   

//       default: return newState;
//   }
// }
// }
// export const count_unpaid_bill = (state = initialState , action) =>
// {
//   let newState = state;
//   if(typeof action.type.count_unpaid_bill === "undefined")
//   {
//     return newState
//   }
//   else
//   {
//   switch(action.type.count_unpaid_bill.type){ 
  
//     case Types.GET_COUNT_UNPAID_BILL :
    
//         newState = action.type.count_unpaid_bill.data;
//         return newState;   

//       default: return newState;
//   }
// }
// }
// export const total_unpaid_bill = (state = initialState , action) =>
// {
//   let newState = state;
//   if(typeof action.type.total_unpaid_bill === "undefined")
//   {
//     return newState
//   }
//   else
//   {
//   switch(action.type.total_unpaid_bill.type){ 
  
//     case Types.GET_TOTAL_UNPAID_BILL :
    
//         newState = action.type.total_unpaid_bill.data;
//         return newState;   

//       default: return newState;
//   }
// }
// }
// export const total_debit_bill = (state = initialState , action) =>
// {
//   let newState = state;
//   if(typeof action.type.total_debit_bill === "undefined")
//   {
//     return newState
//   }
//   else
//   {
//   switch(action.type.total_debit_bill.type){ 
  
//     case Types.GET_TOTAL_DEBIT_BILL :
    
//         newState = action.type.total_debit_bill.data;
//         return newState;   

//       default: return newState;
//   }
// }
// }
// export const sum_debit_bill = (state = initialState , action) =>
// {
//   let newState = state;
//   if(typeof action.type.sum_debit_bill=== "undefined")
//   {
//     return newState
//   }
//   else
//   {
//   switch(action.type.sum_debit_bill.type){ 
  
//     case Types.GET_SUML_DEBIT_BILL :
    
//         newState = action.type.sum_debit_bill.data;
//         return newState;   

//       default: return newState;
//   }
// }
// }
