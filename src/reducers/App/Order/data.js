import * as Types from '../../../constants/ActionType';

const initialState = []


const get_order = (state = initialState , action) =>
{
  let newState = [...state];
  if(typeof action.type.get_order === "undefined")
  {
    return newState
  }
  else
  {
  switch(action.type.get_order.type){ 
  
    case Types.GET_ORDER :
    
        newState = action.type.get_order.data;
        return newState;   

      default: return newState;
  }
}
}
export default get_order

