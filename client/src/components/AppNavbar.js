import React,{useState} from "react";
import { Collapse, Container, Nav, Navbar, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "../components/auth/LoginModal"
import { useSelector } from "react-redux";

function AppNavbar(){
  const [isOpen, setIsOpen] = useState(false);
  //reducer에서 불러온다.
  const { isAuthenticated, user, userRole } = useSelector((state) => state.auth);

  //babel을 통해 콘솔로그 다 삭제가능
  console.log(userRole, "UserRole");

  const dispatch = useDispatch();
  
  return (
    <>
      <Navbar color="dark" expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            My Side Project Blog
          </Link>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto d-felx justify-content-around" navbar> 
              {true ? (
                // <h1 className="text-white">authLink</h1>
                <LoginModal/>
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
