import * as Types from '../../../constants/ActionType';




export const idsupplier   = (state = '' , action) =>
{
  console.log(action.type.onchangesupplier_idsupplier)
  let newState = state;
  if(typeof action.type.onchangesupplier_idsupplier == "undefined"){
    return newState
  }
  else

{
  


  switch(action.type.onchangesupplier_idsupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_IDSUPPLIER :
        newState = action.type.onchangesupplier_idsupplier.text;
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
export const namesupplier   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangesupplier_namesupplier == "undefined"){
    return newState
  }
  else
  {

  
  switch(action.type.onchangesupplier_namesupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_NAMESUPPLIER :
        newState = action.type.onchangesupplier_namesupplier.text;
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
export const emailsupplier  = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangesupplier_emailsupplier == "undefined"){
    return newState
  }
  else
  {

  
  switch( action.type.onchangesupplier_emailsupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_EMAILSUPPLIER :
        newState =  action.type.onchangesupplier_emailsupplier.text;
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
export const phonesupplier   = (state = 0 , action) =>
{
  let newState = state;
  console.log(action);
  if(typeof action.type.onchangesupplier_phonesupplier == "undefined"){
    return newState
  }
  switch(action.type.onchangesupplier_phonesupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_PHONESUPPLIER :
        newState = action.type.onchangesupplier_phonesupplier.text;
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
export const addresssupplier   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangesupplier_addresssupplier == "undefined"){
    return newState
  }
  switch(action.type.onchangesupplier_addresssupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_ADDRESSSUPPLIER :
        newState = action.type.onchangesupplier_addresssupplier.text;
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
export const notesupplier   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangesupplier_notesupplier == "undefined"){
    return newState
  }
  switch(action.type.onchangesupplier_notesupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_NOTESUPPLIER :
        newState = action.type.onchangesupplier_notesupplier.text;
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
export const debitsupplier   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangesupplier_debitsupplier == "undefined"){
    return newState
  }
  switch(action.type.onchangesupplier_debitsupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_DEBITSUPPLIER :
        newState = action.type.onchangesupplier_debitsupplier.text;
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
export const avatarsupplier   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchangesupplier_avatarsupplier == "undefined"){
    return newState
  }
  switch(action.type.onchangesupplier_avatarsupplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_CUSTOMER_AVATARSUPPLIER :
        newState = action.type.onchangesupplier_avatarsupplier.text;
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

//////////// search ///////////

export const id_name_search_supplier    = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_id_name_search_supplier == "undefined"){
    return newState
  }
  switch(action.type.onchange_id_name_search_supplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_ID_NAME_SEARCH_SUPPLIER :
        newState = action.type.onchange_id_name_search_supplier.text;
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

export const debit_search_supplier    = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_debit_search_supplier == "undefined"){
    return newState
  }
  switch(action.type.onchange_debit_search_supplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_DEBIT_SEARCH_SUPPLIER :
        newState = action.type.onchange_debit_search_supplier.text;
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



export const id_name_search_customer    = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_id_name_search_customer == "undefined"){
    return newState
  }
  switch(action.type.onchange_id_name_search_customer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_ID_NAME_SEARCH_CUSTOMER :
        newState = action.type.onchange_id_name_search_customer.text;
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

export const debit_search_customer    = (state = 0 , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_debit_search_customer == "undefined"){
    return newState
  }
  switch(action.type.onchange_debit_search_customer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_DEBIT_SEARCH_CUSTOMER :
        newState = action.type.onchange_debit_search_customer.text;
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
export const index_supplier    = (state = 0 , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_index_supplier == "undefined"){
    return newState
  }
  switch(action.type.onchange_index_supplier.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_INDEX_SUPPLIER :
        newState = action.type.onchange_index_supplier.text;
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
export const index_customer    = (state = 0 , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_index_customer == "undefined"){
    return newState
  }
  switch(action.type.onchange_index_customer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_INDEX_CUSTOMER :
        newState = action.type.onchange_index_customer.text;
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

////form customer

export const idcustomer   = (state = '' , action) =>
{
  console.log(action.type.onchange_idcustomer)
  let newState = state;
  if(typeof action.type.onchange_idcustomer == "undefined"){
    return newState
  }
  else

{
  


  switch(action.type.onchange_idcustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_IDCUSTOMER :
        newState = action.type.onchange_idcustomer.text;
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
export const namecustomer   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_namecustomer == "undefined"){
    return newState
  }
  else
  {

  
  switch(action.type.onchange_namecustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_NAMECUSTOMER:
        newState = action.type.onchange_namecustomer.text;
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
export const emailcustomer  = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_emailcustomer == "undefined"){
    return newState
  }
  else
  {

  
  switch( action.type.onchange_emailcustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_EMAILCUSTOMER :
        newState =  action.type.onchange_emailcustomer.text;
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
export const phonecustomer   = (state = 0 , action) =>
{
  let newState = state;
  console.log(action);
  if(typeof action.type.onchange_phonecustomer == "undefined"){
    return newState
  }
  switch(action.type.onchange_phonecustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_PHONECUSTOMER :
        newState = action.type.onchange_phonecustomer.text;
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
export const addresscustomer   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_addresscustomer == "undefined"){
    return newState
  }
  switch(action.type.onchange_addresscustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_ADDRESSCUSTOMER :
        newState = action.type.onchange_addresscustomer.text;
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
export const notecustomer   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_notecustomer == "undefined"){
    return newState
  }
  switch(action.type.onchange_notecustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_NOTECUSTOMER :
        newState = action.type.onchange_notecustomer.text;
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
export const debitcustomer   = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_debitcustomer == "undefined"){
    return newState
  }
  switch(action.type.onchange_debitcustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_DEBITCUSTOMER :
        newState = action.type.onchange_debitcustomer.text;
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
export const avatarcustomer  = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_avatarcustomer == "undefined"){
    return newState
  }
  switch(action.type.onchange_avatarcustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_AVATARCUSTOMER :
        newState = action.type.onchange_avatarcustomer.text;
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
export const birthdaycustomer  = (state = '' , action) =>
{
  let newState = state;
  if(typeof action.type.onchange_birthdaycustomer == "undefined"){
    return newState
  }
  switch(action.type.onchange_birthdaycustomer.type){ 
    // case Types.FETCH_PRODUCTS:
    //   newState = action.product
    case Types.CHANGE_BIRTHDAYCUSTOMER :
        newState = action.type.onchange_birthdaycustomer.text;
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
