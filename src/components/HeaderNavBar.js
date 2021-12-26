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
        <Navbar.Brand href="#home">
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
          
            <Nav.Link as={Link} to="/" eventKey="link-1" className='text-light'>Home</Nav.Link>
          
        </Nav.Item>
          
        <Nav.Item>
            <Nav.Link as={Link} to="/favorites" eventKey="link-1" className='text-light'>Favoritos</Nav.Link>
        </Nav.Item>
         
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar un nombre"
            className="me-1"
            aria-label="Search"
          />
          <Button variant="outline-light"><i className="fas fa-search"></i></Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default HeaderNavBar;
