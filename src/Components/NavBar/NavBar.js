import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(){
    return (
        <Navbar bg="dark" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <Nav.Link href="#">
          Link
        </Nav.Link>
      </Nav>
      <SearchBar/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}