import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  // logout
  const handleLogOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <header className="position-sticky top-0 main-menu">
      <Navbar expand="lg">
        <Container>
          <Link to="/home">
            <img className="w-50" src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} className="custom-link" to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="custom-link" href="home#services">
                Services
              </Nav.Link>
              <Nav.Link className="custom-link" href="home#experts">
                Experts
              </Nav.Link>
              <Nav.Link as={Link} className="custom-link" to="/about">
                About
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} className="custom-link" to="/manage">
                    manage
                  </Nav.Link>
                  <Nav.Link as={Link} className="custom-link" to="/addservice">
                    addservice
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-link custom-link text-decoration-none"
                >
                  Log Out
                </button>
              ) : (
                <Nav.Link as={Link} className="custom-link" to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
