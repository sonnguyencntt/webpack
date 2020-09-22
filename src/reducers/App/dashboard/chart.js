import * as Types from '../../../constants/ActionType';

const initialState = []


export const chart = (state = initialState , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_chart === "undefined")
  {
    return newState
  }
  else
  {
  switch(action.type.get_chart.type){ 
  
    case Types.GET_CHART :
    
        newState = action.type.get_chart.data;
        return newState;   

      default: return newState;
  }
}
}
export default chart
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
