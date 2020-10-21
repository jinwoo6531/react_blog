import { all,fork } from 'redux-saga/effects'
import axios from 'axios';
import authSaga from "./authSaga";
import dotenv from 'dotenv';
dotenv.config()

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL

export default function* rootSaga() { //*은 제너레이터이고 값을 여러개 반환한다.
    yield all([
        fork(authSaga)
    ]);
}
