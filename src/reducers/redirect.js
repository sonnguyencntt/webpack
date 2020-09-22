import * as Types from '../constants/ActionType';

const initialState = true;


const redirect = (state = initialState , action) =>
{
  let newState = state;
  if(typeof action.type.redirect === "undefined")
  {
    return newState
  }
  else{
    switch(action.type.redirect.type){ 
      case Types.CHECK_REDIRECT:
    
        newState = action.type.redirect.data;
        return newState;        
        default: 
       return newState;
    }
  }
  
}
export default redirect;