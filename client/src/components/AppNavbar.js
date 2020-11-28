import React, { useCallback, useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Collapse,
  Container,
  Form,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../components/auth/LoginModal';
import { useSelector } from 'react-redux';
import { LOGOUT_REQUEST } from '../redux/types';
import RegisterModal from './auth/RegisterModal';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //reducer에서 불러온다.
  const { isAuthenticated, user, userRole } = useSelector(
    (state) => state.auth
  );

  //babel을 통해 콘솔로그 다 삭제가능
  console.log(userRole, 'UserRole');

  const dispatch = useDispatch();

  //useCallback는 useEffect와 유사
  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);

  //toggle on off설정
  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const addPostClick = () => {};

  const authLink = (
    <Fragment>
      <NavItem>
        {userRole === 'Admin' ? (
          <Form className="col mt-2">
            <Link
              to="post"
              className="btn btn-success block text-white px-3"
              onClick={addPostClick}
            >
              Add Post
            </Link>
          </Form>
        ) : (
          ''
        )}
      </NavItem>
      <NavItem className="d-flex justify-content-center">
        <Form className="col mt-2">
          {user && user.name ? (
            <Link>
              <Button outline color="light" className="px-3" block>
                <strong>{user ? `Welcome ${user.name}` : ''}</strong>
              </Button>
            </Link>
          ) : (
            <Button outline color="light" className="px-3" block>
              <strong>No User</strong>
            </Button>
          )}
        </Form>
      </NavItem>
      <NavItem>
        <Form className="col">
          <Link onClick={onLogout} to="#">
            <Button onuline color="light" className="mt-2" block>
              Logout
            </Button>
          </Link>
        </Form>
      </NavItem>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar color="dark" expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            My Side Project Blog
          </Link>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-felx justify-content-around" navbar>
              {isAuthenticated ? authLink : guestLink}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;
