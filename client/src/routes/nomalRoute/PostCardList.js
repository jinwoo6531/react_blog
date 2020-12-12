import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { POSTS_LOADING_REQUEST } from '../../redux/types';
import { Helmet } from 'react-helmet';
import { Row } from 'reactstrap';
import { GrowingSpinner } from '../../components/spinner/Spinner';
import PostCardOne from '../../components/post/PostCardOne';

const PostCardList = () => {
  //reducer의 post에서 posts 불러오기
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: POSTS_LOADING_REQUEST,
    });
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet title="Home" />
      <Row>{posts ? <PostCardOne post={posts} /> : GrowingSpinner}</Row>
    </Fragment>
  );
};

export default PostCardList;
