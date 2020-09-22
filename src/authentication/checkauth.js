import callApi from './../ultis/apiCaller';

export default function checkAuth(){
   return  callApi('auth', 'get', null).then(res =>{
      
       if(res == false)
       {
          return false
       }
       return true;
      
       
     });
}


