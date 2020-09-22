import * as Types from './../constants/ActionType';
import callApi,  * as middleware from './../ultis/apiCaller';
import * as export_Data from './exportdata';

middleware.middleWare_resPonse();

export const acFetchRoomsRequest = (data) => {
   
     return (next, getstate, extra) =>{

         callApi('query/selectalldata', 'POST', data).then(res =>{
            if(res == false)
            {
                return;
            }
           console.log(res);
           next({type : {
               fetch_room :{
                   type : 'FETCH_ROOMS',
                   data : res.data
               }
           }});
          
        });

    };
}
export const acFetchMenuRequest = () => {
   
    return (next, getstate, extra) =>{

        callApi('query/selectallmenu', 'get', null).then(res =>{
           if(res == false)
           {
               return;
           }
          console.log(res);
          next({type : {
              get_menu :{
                  type : 'GET_MENU',
                  data : res.data.menu
              }
          }});
         
       });

   };
}
export const acFetchOrderRequest = () => {
   
    return (next, getstate, extra) =>{

        callApi('query/selectOrder', 'get', null).then(res =>{
           if(res == false)
           {
               return;
           }
          console.log(res);
          next({type : {
            get_order :{
                  type : 'GET_ORDER',
                  data : res.data
              }
          }});
         
       });

   };
}
export const acInsertRoomsRequest = (data, statusEvent) => {
   
    var status  = {};
    return next =>{
                   
        if(statusEvent == true)
        {
            callApi('query/insertdata', 'POST', data).then(res =>{
                if(res == false)
                {
                    return;
                }
              if(typeof res.data.error == 'undefined' ){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {fetch_room : {
                   type : 'FETCH_ROOMS',
                   data : res.data
               }, status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               mroom_ontap : {
                   type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
                   event : 'hide-modal',
                       }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }

               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
            
   
              
             
           }).catch((err) =>{console.log(err)});
        }
        else{

            callApi('query/updatedata', 'POST', data).then(res =>{
                if(res == false)
                {
                    return;
                }

                if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Chỉnh sửa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {fetch_room : {
                   type : 'FETCH_ROOMS',
                   data : res.data
               }, status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               mroom_ontap : {
                   type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
                   event : 'hide-modal',
                       }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }

               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
   
              
             
           }).catch((err) =>{console.log(err)});
        }
   

    };
    
}
export const acInsertRooms = (data) =>{
    
    return {

        type : data
        // type : Types.INSERT_PRODUCT,
        // room,
        // status
    }
}
// 
export const acDeleteRoomsRequest = (id) => {
    var status  = {};


    return next =>{
       
         callApi('query/deletedata', 'POST', id).then(res =>{
            if(res == false)
            {
                return;
            }
            
             if(typeof res.data.error == "undefined"){
                 if(res.data.data == "ERR-14-06-1999")
                 {

                    status = {
                       status : 'success',
                       classcomponent : 'alert alert-success',
                       text : 'Xóa dữ liệu không thành công thành công ^-^',
                       display : 'show-alert'
                   }
                   
       
                   // next(acInsertRooms(res.data, status))
                   next({type : { status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   },
                 
               }
               })
                   
                   status = {
                       status : 'success',
                       classcomponent : 'alert alert-success',
                       text : 'Thêm mới dữ liệu thành công ^-^',
                       display : 'hide-alert'
                   }

                   setTimeout(function(){
       
       
       
                       next({type : {status_event :{
                           type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                           status:status
                       }}})
       
                   }, 2000);
                 }
                 else
                 {
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Xóa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {fetch_room : {
                   type : 'FETCH_ROOMS',
                   data : res.data
               }, status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
             
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
                 }
                
              }
              //
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
          
        });

    };
}
export const actDeleteProduct = (product) =>{
    return {
        type : Types.DELETE_PRODUCT,
        product
    }
}
export const acUpdateTableRequest = (data) =>{

  
    var status  = {};
    return next =>{
                   
        //if(statusEvent == true)
        //{
            callApi('query/updatedata', 'POST', data).then(res =>{
                if(res == false)
             {
                 return;
             }
              if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Chỉnh sửa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {
                    status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               fetch_table : {
                type : 'FETCH_TABLES',
                data : res.data.data
            },
            table_count : {
               type : 'FETCH_COUNT_TABLES',
               count : res.data.count
            },
            table_index : {
                type : 'FETCH_INDEX_TABLES',
                index : data.index
            }, 
            mtable_ontap : {
                type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
                event : 'hide-modal',
                    }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
                   
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
   
              
             
           }).catch((err) =>{console.log(err)});
   
   

    };

}
export const acUpdateCustomerRequest = (data) =>{

  
    var status  = {};
    return next =>{
                   
        //if(statusEvent == true)
        //{
            callApi('query/updatedata', 'POST', data).then(res =>{
                if(res == false)
             {
                 return;
             }
              if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Chỉnh sửa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               // next(acInsertRooms(res.data, status))
               next({type : {
                    status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               fetch_customer : {
                type : 'FETCH_CUSTOMER',
                data : res.data.data
            },
            customer_count : {
               type : 'FETCH_COUNT_CUSTOMER',
               count : res.data.count
            },
            customer_index : {
                type : 'FETCH_INDEX_CUSTOMER',
                index : data.index
            }, 
            mroom_ontap : {
                type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
                event : 'hide-modal',
                    }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
                   
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
   
              
             
           }).catch((err) =>{console.log(err)});
   
   

    };

}
export const actUpdateProduct = (product) =>{
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}
export const acSearchRoomsRequest = (name) =>{

    return next =>{
       
        callApi('query/searchdata', 'POST', name).then(res =>{
            if(res == false)
            {
                return;
            }
          console.log(res);
            next({type : {
                fetch_room :{
                    type : 'FETCH_ROOMS',
                    data : res.data
                }
            }});
         
       }).catch((err) => {console.log(err)})

   };

}
export const acFetchTableRequest = (data) => {
   
    return next =>{
         callApi('query/selectalldata', 'POST',data ).then(res =>{
             if(res == false)
             {
                 return;
             }
             console.log('da vao select table')
           
             next({type : {
                 fetch_table : {
                     type : 'FETCH_TABLES',
                     data : res.data.data
                 },
                 table_count : {
                    type : 'FETCH_COUNT_TABLES',
                    count : res.data.count
                 },
                 table_index : {
                     type : 'FETCH_INDEX_TABLES',
                     index : data.index
                 },
                 

             }})
          
        });

    };
}

export const acFetchCustomerRequest = (data) => {
   
    return next =>{
         callApi('query/selectalldata', 'POST',data ).then(res =>{
            if(res == false)
            {
                return;
            }
           console.log(res);
           
             next({type : {
                 fetch_customer : {
                     type : 'FETCH_CUSTOMER',
                     data : res.data.data
                 },
                 customer_count : {
                    type : 'FETCH_COUNT_CUSTOMER',
                    count : res.data.count
                 },
                 customer_index : {
                     type : 'FETCH_INDEX_CUSTOMER',
                     index : data.index
                 }

             }})
          
        });

    };
}
export const acFetchTable = (tables, index, status, acForNavigation) =>{
   
    return {
        type : Types.FETCH_TABLES,
       data : acForNavigation,
        status : status,
        tables : {
            data : tables.data,
            count : tables.count,
            index : index.index
        }
    }
}
export const acFetchsttTableRequest = () => {
   
    return next =>{
       
         callApi('getstt', 'get',null ).then(res =>{
            if(res == false)
            {
                return;
            }
           
           next(acFetchsttTable(res.data));
          
        });

    };
}
export const acFetchsttTable = (status) =>{
    
    return {
        type : Types.FETCH_STTTABLE,
        status
    }
}
export const acSearchTablesRequest = (data, index) => {
    return (next, getstate, extra) =>{
        callApi('query/searchdata', 'post', data).then(res =>{
            if(res == false)
            {
                return;
            }
          
          
          next(acFetchTable(res.data, index,''));
         
       }).catch((err)=>{console.log(err)});

   };
}

export const acInsertTableRequest = (data, statusEvent) => {
   console.log(data);
    var status  = {};
    return next =>{
                   
        //if(statusEvent == true)
        //{
            callApi('query/insertdata', 'POST', data).then(res =>{
                if(res == false)
                {
                    return;
                }
              console.log(res);
              if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               next({type : {
                    status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               fetch_table : {
                type : 'FETCH_TABLES',
                data : res.data.data
            },
            table_count : {
               type : 'FETCH_COUNT_TABLES',
               count : res.data.count
            },
            table_index : {
                type : 'FETCH_INDEX_TABLES',
                index : data.index
            }, 
            mtable_ontap : {
                type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
                event : 'hide-modal',
                    }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Thêm mới dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
            
   
              
             
           }).catch((err) =>{console.log(err)});
      
   

    };
    
}

export const acDeleteTableRequest = (data) => {
  
    var status  = {};
    return next =>{
                   
       
            callApi('query/deletedata', 'POST', data).then(res =>{
                if(res == false)
                {
                    return;
                }
              if(typeof res.data.error == "undefined"){
   
                status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Xóa dữ liệu thành công ^-^',
                   display : 'show-alert'
               }
               
   
               next({type : {
                    status_event :{
                   type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                   status:status
               },
               fetch_table : {
                type : 'FETCH_TABLES',
                data : res.data.data
            },
               fetch_customer : {
                type : 'FETCH_CUSTOMER',
                data : res.data.data
            },
            customer_count : {
               type : 'FETCH_COUNT_CUSTOMER',
               count : res.data.count
            },
            customer_index : {
                type : 'FETCH_INDEX_CUSTOMER',
                index : data.index
            }, 
            mroom_ontap : {
                type : 'MODAL_HEADER_FOR_ONTAP_TABLE',
                event : 'hide-modal',
                    }, 
   
           }
           })
               
               status = {
                   status : 'success',
                   classcomponent : 'alert alert-success',
                   text : 'Xóa dữ liệu thành công ^-^',
                   display : 'hide-alert'
               }
               setTimeout(function(){
   
   
   
                   next({type : {status_event :{
                       type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                       status:status
                   }}})
   
               }, 2000);
              }
              else
              {
                next({type : {status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:{
                        status : 'success',
                        classcomponent : 'alert alert-danger',
                        text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                        display : 'show-alert'
                    }
                }}})
                setTimeout(function(){
   
   
   
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:{
                            status : 'success',
                            classcomponent : 'alert alert-success',
                            text : 'Thêm mới dữ liệu thành công ^-^',
                            display : 'hide-alert'
                        }
                    }}})
    
                }, 2000);
              }
            
   
              
             
           }).catch((err) =>{console.log(err)});
     
   

    };
    
}
export const acInsertCustomerRequest = (data, statusEvent) => {
    console.log(data);
     var status  = {};
     return next =>{
                    
         //if(statusEvent == true)
         //{
             callApi('query/insertdata', 'POST', data).then(res =>{
                if(res == false)
                {
                    return;
                }
               console.log(res);
               if(typeof res.data.error == "undefined"){
    
                 status = {
                    status : 'success',
                    classcomponent : 'alert alert-success',
                    text : 'Thêm mới dữ liệu thành công ^-^',
                    display : 'show-alert'
                }
                
    
                next({type : {
                     status_event :{
                    type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                    status:status
                },
                fetch_customer : {
                 type : 'FETCH_CUSTOMER',
                 data : res.data.data
             },
             customer_count : {
                type : 'FETCH_COUNT_CUSTOMER',
                count : res.data.count
             },
             customer_index : {
                 type : 'FETCH_INDEX_CUSTOMER',
                 index : data.index
             }, 
             mroom_ontap : {
                 type : 'MODAL_HEADER_FOR_ONTAP_ROOM',
                 event : 'hide-modal',
                     }, 
    
            }
            })
                
                status = {
                    status : 'success',
                    classcomponent : 'alert alert-success',
                    text : 'Thêm mới dữ liệu thành công ^-^',
                    display : 'hide-alert'
                }
                setTimeout(function(){
    
    
    
                    next({type : {status_event :{
                        type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                        status:status
                    }}})
    
                }, 2000);
               }
               else
               {
                 next({type : {status_event :{
                     type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                     status:{
                         status : 'success',
                         classcomponent : 'alert alert-danger',
                         text : 'Đã xảy ra lỗi, vui lòng kiểm tra lại ^-^',
                         display : 'show-alert'
                     }
                 }}})
                 setTimeout(function(){
    
    
    
                     next({type : {status_event :{
                         type : 'STATUS_EVENT_UPDATE_DELETE_INSERT',
                         status:{
                             status : 'success',
                             classcomponent : 'alert alert-success',
                             text : 'Thêm mới dữ liệu thành công ^-^',
                             display : 'hide-alert'
                         }
                     }}})
     
                 }, 2000);
               }
             
    
               
              
            }).catch((err) =>{console.log(err)});
       
    
 
     };
     
 }

 export const acFetchDashboardRequest = (data) => {
   
    return (next, getstate, extra) =>{

        callApi('query/getstatistical', 'POST', data).then(res =>{
           if(res == false)
           {
               return;
           }
         res.data[0].sum_debit_bill = Number( res.data[0].sum_debit_bill)
         res.data[0].total_revenue = Number( res.data[0].total_revenue)
         res.data[0].total_unpaid_bill = Number( res.data[0].total_unpaid_bill)


          next({type : {
              get_statistical :{
                  type : 'GET_STATISTICAL',
                  data : res.data[0]
              }
          }});
         
       });

   };
}
export const getchart = (data) => {
   
    return (next, getstate, extra) =>{
        callApi('chart', 'POST',data).then(res =>{
    if(res == false)
    {
        return;
    }
   next({
       type : {
           get_chart : {
               type : 'GET_CHART',
               data : res.data,
           }
       }
   });
   console.log(res);

   
});
    }}
export const acSearchBillIdbill = (id) =>{
    return (next, getstate, extra) =>{

        callApi('query/searchforbill', 'post', id).then(res =>{
           if(res == false)
           {
               return;
           }
          console.log(res);
          next({type : {
            get_order :{
                  type : 'GET_ORDER',
                  data : res.data
              }
          }});
         
       })
       .catch((err)=>{
           console.log(err)
       });

   };
}   
export const acseachForDatetime = (date) =>{
    return (next, getstate, extra) =>{

        callApi('query/searchfordatetime', 'post', date).then(res =>{
           if(res == false)
           {
               return;
           }
          console.log(res);
          next({type : {
            get_order :{
                  type : 'GET_ORDER',
                  data : res.data
              }
          }});
         
       })
       .catch((err)=>{
           console.log(err)
       });

   };
} 
export const exportExcelFromBill = ()=>{
	export_Data.export_Data();

}