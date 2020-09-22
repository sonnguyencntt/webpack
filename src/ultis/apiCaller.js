import axios from 'axios';
import * as Config from './../constants/Config';
import history from './../history';
import store from './../index'

export default function(endpoint, method, body){
    return axios({
        method : method,
        url : `/${endpoint}`,
        data : body,
        
    }).catch(err =>{
        console.log(err);
    })
 } ;
 
 export function middleWare_resPonse(){
    axios.interceptors.response.use((response) => {
        console.log(response)
        if(response.config.url == '/checkpass')
        {
            return response;
        }
       else
       {
        if(response.data.token == false)
        {
           
         
            store.dispatch({
                type : {
                  redirect : {
                    type : 'REDIRECT_PAGES',
                    data : false
                  }
                }
              })
            return false
        }
        return response
       }

    })
 }  