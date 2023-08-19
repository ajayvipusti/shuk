import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

const TopNav = () => {
    
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="white" variant="black" className=' fixed-top'>
      <div className='container'>
      <Navbar.Brand as={Link} to="/" className='navbrand'>
        <img src={logo} alt='logo' width={160}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services">Our Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          {/* Add more Nav.Link components for your menu items */}
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link className='btn btn-danger button' href="#login" >Get a Quote</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
      </div>
    </Navbar>
  
  )
}

export default TopNav