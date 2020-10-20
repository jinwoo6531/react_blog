import {all} from 'redux-saga/effects'

export default function* rootSaga() { //*은 제너레이터이고 값을 여러개 반환한다.
    yield all([]);
}
