import * as Types from '../../../constants/ActionType';

const initialState = true;


const loading = (state = initialState , action) =>
{
  let newState = state;
  if(typeof action.type.loading1 === "undefined")
  {
    return newState
  }
  else{
    switch(action.type.loading1.type){ 
      case Types.CHECK_LOADING1:
    
        newState = action.type.loading1.data;
        return newState;        
        default: 
       return newState;
    }
  }
  
}
export default loading;