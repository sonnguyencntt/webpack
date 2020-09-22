import * as Types from './../../../constants/ActionType';

const confirm = {
    icon : null,
    //"fa fa-cog"
    modalBody : null,
    display : 'none',
    data : '',
    //"Bạn có thật sự muốn xoá dữ liệu này ? Dữ liệu bị xoá sẽ bị mất và không thể khôi phục."
    type : null,
    btnRight : 'Agree',
    btnLeft : 'Cancel',
    title : 'Bạn có chắc chắn ?',
    content : '"Bạn có thật sự muốn xoá dữ liệu này ? Dữ liệu bị xoá sẽ bị mất và không thể khôi phục.',

};



export const confirmPos = (state = confirm , action) =>
{
  let newState = {...state};
  if(typeof action.type.confirm_pos === "undefined"){
    return newState
  }
  else
  {
  switch(action.type.confirm_pos.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CONFIRM_POS :
        newState = action.type.confirm_pos.data;
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
