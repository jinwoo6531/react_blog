import {
  POSTS_LOADING_FAILURE,
  POSTS_LOADING_REQUEST,
  POSTS_LOADING_SUCCESS,
} from '../types';

const initialState = {
  isAuthenticated: null, //인증된 사람만 글쓰기
  posts: [],
  postDetail: '',
  postCount: '',
  loading: false,
  error: '',
  creatorId: '',
  categoryFindResult: '',
  title: '',
  searchBy: '',
  searchResult: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POSTS_LOADING_REQUEST:
      return {
        ...state,
        posts: [],
        loading: true,
      };
    case POSTS_LOADING_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };
    case POSTS_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
