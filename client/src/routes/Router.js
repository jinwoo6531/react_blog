import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppNavbar from '../components/AppNavbar';
import { Container } from 'reactstrap';
import { Redirect, Switch } from 'react-router-dom';
import PostCardList from './nomalRoute/PostCardList';
import PostWrite from './nomalRoute/PostWrite';
import PostDetail from './nomalRoute/PostDetail';
import CategoryResult from './nomalRoute/CategoryResult';
import Search from './nomalRoute/Search';

function MyRouter() {
  return (
    <>
      <AppNavbar />
      <Header />

      {/* 부트스트랩의 container사용 */}
      <Container id="main-body">
        <Switch>
          <Route path="/" exact component={PostCardList} />
          <Route path="/posts" exact component={PostWrite} />
          <Route path="/posts/:id" exact component={PostDetail} />
          <Route
            path="/posts/category/:categoryName"
            exact
            component={CategoryResult}
          />
          <Route path="/search/:searchTerm" exact component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default MyRouter;
