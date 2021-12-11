import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(){
    return (
        <Navbar bg="dark" expand="lg">
    <Container fluid>
    <Navbar.Brand href="/home/8" style={{color: 'white'}}>Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/favorites/8" style={{color: 'white'}}>Favorites</Nav.Link>
        <Nav.Link href="/detail/0" style={{color: 'white'}}>Random Movie</Nav.Link>
      </Nav>
      <SearchBar/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}