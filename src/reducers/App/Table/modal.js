import * as Types from './../../../constants/ActionType';


const tText = '';
const tOntap = 'hide-modal';
const rText = '';
const rOntap = 'hide-modal';


export const t_Text = (state = tText , action) =>
{
    console.log(action)
    let newState = state;

    if(typeof action.type.mtable_text === "undefined"){
        return newState
    }
    else{
        switch(action.type.mtable_text.type){ 
            // case Types.FETCH_PRODUCTS:
            //   newState = action.product
            case Types.MODAL_HEADER_FOR_INSERT_UPDATE_TABLE :
                newState = action.type.mtable_text.event;
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
export const t_Ontap = (state = tOntap , action) =>
{
    console.log('test ne nhasadasdasdasda 1995');


    let newState = state;

    if(typeof action.mtable_ontap === "undefined"){
        console.log('dasd');
        return newState;
    }
    else
    {
        console.log('sda');
        switch(action.type.mtable_ontap.type){ 
          // case Types.FETCH_PRODUCTS:
          //   newState = action.product
          case Types.MODAL_HEADER_FOR_ONTAP_TABLE :
              newState = action.type.mtable_ontap.event;
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
export const r_Text = (state = rText , action) =>
{
    console.log(action)
    let newState = state;

    if(typeof action.type.mroom_text === "undefined"){
        return newState
    }
    else{
        
  switch(action.type.mroom_text.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.MODAL_HEADER_FOR_INSERT_UPDATE_ROOM :
        newState = action.type.mroom_text.event;
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
export const r_Ontap = (state = rOntap , action) =>
{
    console.log(action)
    let newState = state;

    if(typeof action.type.mroom_ontap === "undefined"){
        return newState
    }
    else{
  switch(action.type.mroom_ontap.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.MODAL_HEADER_FOR_ONTAP_ROOM :
        newState = action.type.mroom_ontap.event;
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