import * as Types from '../constants/ActionType';

const initialState = false;


const loading = (state = initialState , action) =>
{
  let newState = state;
  if(typeof action.type.loading === "undefined")
  {
    return newState
  }
  else{
    switch(action.type.loading.type){ 
      case Types.CHECK_LOADING:
    
        newState = action.type.loading.data;
        return newState;        
        default: 
       return newState;
    }
  }
  
}
export default loading;