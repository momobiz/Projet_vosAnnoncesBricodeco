import axios from 'axios'; 
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, 
    LOGIN_FAIL, LOGOUT, GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE} from './ActionTypes';
import setAuthToken from '../Utils/setAuthToken';



/**************************************************** */

export const loginUser=(user)=>async(dispatch)=>{
    const config={
        headers:{
            'Content-Type':"application/json"
        }
    }
       
    try {
       const res= await axios.post('http://localhost:5000/users/login', user, config);
        localStorage.setItem('token', res.data);
        

       dispatch({type:LOGIN_SUCCESS, payload:res.data})
       
        dispatch(loadUser()); 

        
    } catch (error) {
        dispatch({type:LOGIN_FAIL})
        
    }

  
}       

/******************************************************************** */

/************************************************************** */
export const loadUser=()=>async(dispatch)=>{
    
    
    const config={
        headers:{
            'Content-Type':"application/json"
        }
    }
    
    if(localStorage.token) setAuthToken(localStorage.token); 
   
    try{
        const response= await axios.get('http://localhost:5000/users/user', config);
        dispatch({
            type:USER_LOADED, 
            payload:response.data
        })

    }catch(error){
        dispatch({
            type:AUTH_ERROR
        })

    }

}
/**************************************************** */

export const  getUsers=()=>(dispatch)=>{
    axios.get('http://localhost:5000/users/showusers')
    .then(res=>dispatch({ type:"FETCH_ALL_USERS", payload:res.data}))
    .catch(error=>console.log(error))
   
   
   }
   export const createUser=(newUser)=>async(dispatch)=>{
    await axios.post('http://localhost:5000/users/createuser', newUser)
     .then(res=>dispatch(getUsers()))
     .catch(error=>console.log(error))
 
 }
 /********************************************** */
 export const registerUser=(newUser)=>async(dispatch)=>{
     const config={
         headers:{
             'Content-Type':"application/json"
         }
     }
    
     await axios.post('http://localhost:5000/users/createuser', newUser, config)
     .then(res=>{const token=res.data
       
                localStorage.setItem('token', token)
               
              dispatch({type:REGISTER_SUCCESS, payload:res.data})
              dispatch(loadUser())
            
            })
              
     .catch(error=>{console.log(error);
         dispatch({type:REGISTER_FAIL})})
 


 }
 /********************************************************** */


 export const logout=(x)=>async(dispatch)=>{
    
    await dispatch({
        type:CLEAR_PROFILE
    })
   
    await dispatch({
        type:LOGOUT
    })
   
  console.log(x);
  }
  /****************************************** */

  export const getCurrentProfile=()=>async(dispatch)=>{
      try {
        const res= await axios.get('http://localhost:5000/users/user');
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
          
      } catch (error) {
          dispatch({
              type:PROFILE_ERROR,
              payload: {msg:error.response.statusText, status:error.response.status}
          })
          
      }

  }