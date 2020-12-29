import Reducers from './Reducers'; 
import {createStore, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware=[thunk];
const store= createStore(Reducers,composeEnhancers(applyMiddleware(...middleware)));

export default store;