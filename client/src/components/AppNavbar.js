import React,{useCallback, useState,useEffect} from "react";
import { useDispatch } from 'react-redux'
import { Collapse, Container, Nav, Navbar, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal"
import { useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "../redux/types";

function AppNavbar(){
  const [isOpen, setIsOpen] = useState(false);
  //reducer에서 불러온다.
  const { isAuthenticated, user, userRole } = useSelector((state) => state.auth);

  //babel을 통해 콘솔로그 다 삭제가능
  console.log(userRole, "UserRole");

  const dispatch = useDispatch();

  //useCallback는 useEffect와 유사
  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST
    })
  },[dispatch])

  //toggle on off설정
  useEffect(() => {
    setIsOpen(false)
  }, [user])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Navbar color="dark" expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            My Side Project Blog
          </Link>
          <NavbarToggler onClick={handleToggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-felx justify-content-around" navbar> 
              {isAuthenticated ? (
                <h1 className="text-white">authLink</h1>
              ) : (
                <LoginModal/>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
