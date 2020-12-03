import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import postReducer from './postReducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history), //계속 생성되는 reducer를 router 하나만으로 불러올 수 있다.
    auth: authReducer,
    post: postReducer,
  });

export default createRootReducer;
