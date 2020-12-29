import {FETCH_ALL_POSTS, DELETE_POST} from './ActionTypes'; 


const postReducer=(posts=[], action)=>{
    switch(action.type){
        case 'FETCH_ALL_POSTS':
            return action.payload;
        case 'DELETE_POST':
            return [...posts, posts.filter(post=>post._id && post._id!==action.payload)];
      
        case 'CREATE_POST':
             return [...posts, action.payload];
        default:
            return posts; 
    }

}
export default postReducer;