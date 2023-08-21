import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg'
import { Link,NavLink } from 'react-router-dom';

const TopNav = () => {
    
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="white" variant="black" className=' fixed-top py-2'>
      <div className='container'>
      <Navbar.Brand as={Link} to="/" className='navbrand'>
        <img src={logo} alt='logo' width={160}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
          <Nav.Link as={NavLink} to="/services">Our Services</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          {/* Add more Nav.Link components for your menu items */}
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link  as={Link} className='btn btn-danger button' to="/contact" >Get a Quote</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
      </div>
    </Navbar>
  
  )
}

export default TopNav