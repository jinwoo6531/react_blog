import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {};

const middlewares = [sagaMiddleware, routerMiddleware(history)]; //향후에 리덕스에 관련된 미들웨어를 추가할 수 있다.
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; 

//배포할때는 devtools를 안보이게 해줘야한다.
const composeEnhancer =  
    process.env.NODE_ENV === "production" ? compose : devtools || compose;

//3개로 store 생성한다.    
const store = createStore(
    createRootReducer(history),
    initialState, //초기상태
    composeEnhancer(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga) //sage middleware를 작동한다.

export default store;