import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import postReducer from './reducers/post';

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer
  })
  
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;