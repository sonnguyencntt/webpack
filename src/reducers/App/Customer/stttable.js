import * as Types from '../../../constants/ActionType';

const initialState = [{
    Id_stt : '',
    name : ''

}];


const status = (state = initialState , action) =>
{
  let newState = [...state];
  console.log('dispatch trong status');
  switch(action.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.FETCH_STTTABLE :
        newState = action.status;
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
export default status;