import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from './ActionTypes'; 


const initialState={
    token:localStorage.getItem('token'),
    isAutheticated:null,
    loading:true,
    
   user:null
}

const authReducer=(state=initialState, action)=>{
   const  {type, payload}=action;
 
   switch(type){

      case USER_LOADED:
        
       
          return {
              ...state,
              isAuthenticated:true,
              loading:false,
              user:payload,

             
          }

       case REGISTER_SUCCESS:
           case LOGIN_SUCCESS:
          
           return {
               ...state,
              
               token:localStorage.getItem('token'),
               isAuthenticated:true,
               loading:false,
 

           }
        case REGISTER_FAIL:
        case AUTH_ERROR: 
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
               token:null,
               isAuthenticated:false,
               loading:false,
              
             
                }
           default:
               return state;
                  
            
   }

}
export default authReducer;