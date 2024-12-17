import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../pages/Header.css';
const Header = () => {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand className="logo">Lets Go...</Navbar.Brand>
         
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="shops">
            
          <Nav.Link as={Link} to="/home" className="color-text">Home</Nav.Link>
            <Nav.Link as={Link} to="/women"className="color-text">Women</Nav.Link>
            <Nav.Link as={Link} to="/men"className="color-text">Men</Nav.Link>
            <Nav.Link as={Link} to="/kids"className="color-text">Kids</Nav.Link>
            <Nav.Link as={Link} to="/beauty"className="color-text">Beauty</Nav.Link>
            <Nav.Link as={Link} to="/footwear"className="color-text">Footwear</Nav.Link>
            <Nav.Link as={Link} to="/jewellery"className="color-text">Jewellery</Nav.Link>
          </Nav>

          <Form className="searchbar">
            <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
            <Button className='search-button' variant="outline-success">Search</Button>
          </Form>

          <Nav className="sign">
            <Nav.Link href="/signin"className="color-text">Sign In</Nav.Link>
            <Nav.Link href="/signup"className="color-text">Sign Up</Nav.Link>
          </Nav>

          <Nav className="loved">
            <Nav.Link href="/wishlist"className="color-text">Wishlist</Nav.Link>
            <Nav.Link href="/cart"className="color-text">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
