import axios from 'axios';
import { all, put, takeEvery, call, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  POSTS_LOADING_FAILURE,
  POSTS_LOADING_REQUEST,
  POSTS_LOADING_SUCCESS,
} from '../types';

//All Posts load
const loadPostAPI = () => {
  return axios.get('/api/post');
};

function* loadPosts() {
  try {
    const result = yield call(loadPostAPI);
    console.log('result', result);
    yield put({
      type: POSTS_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: POSTS_LOADING_FAILURE,
      payload: e,
    });
    //실패시 "/"로 보낸다.
    yield push('/');
  }
}

function* watchLoadPosts() {
  yield takeEvery(POSTS_LOADING_REQUEST, loadPosts);
}

export default function* postSaga() {
  yield all([fork(watchLoadPosts)]);
}
