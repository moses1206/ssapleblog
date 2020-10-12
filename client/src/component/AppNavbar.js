import React, { Fragment } from "react";
import { Collapse, Container, Nav, Navbar, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <Fragment>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white  text-decoration-none">
            Side Project`s Blog(부호 블로그)
          </Link>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              {false ? (
                <h1 className="text text-white">AuthLink</h1>
              ) : (
                <h1 className="text text-white">GuestLink</h1>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;
