import {combineReducers} from 'redux';
import postReducer from './PostReducer';
import userReducer from './UserReducer';
import authReducer from './AuthReducer';
import profileReducer from './ProfileReducer';


 const  Reducers=combineReducers({
    postReducer,
    userReducer, 
    authReducer, 
    profileReducer
    

})
export default Reducers;
