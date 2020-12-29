import React from 'react';

import {useSelector} from 'react-redux'; 
import {Route, Redirect} from 'react-router-dom'; 
import {PropTypes} from 'prop-types'; 


const PrivateRoute = ({component:Component, ...rest}) => {
    const auth=useSelector(state=>state.authReducer); 
   const  {isAuthenticated, loading}=auth; 

    return (
       <Route {...rest}  render={props=>!isAuthenticated && !loading ? (<Redirect to='/user/connexion'/>):
    (<Component {...props}/>)}/>
    );
}

export default PrivateRoute;


PrivateRoute.propTypes={
    auth:PropTypes.object.isRequired
}
