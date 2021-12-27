import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderNavBar = () => {
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className='links' >
          <img
            alt="Star Wars Logo"
            src="/logo512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{'  '}
          Star Wars
        </Navbar.Brand>
        <Nav.Item>
          
          <Nav.Link as={Link} to="/" eventKey="link-1" className='text-light links navBarLink'>Home</Nav.Link>
          
        </Nav.Item>
          
      </Container>
    </Navbar>
  );
}

export default HeaderNavBar;
