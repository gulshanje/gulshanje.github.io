import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import  '../assets/styles/Navbar.css';
import '../assets/styles/Main.css';
import { useAuth } from '../context/AuthContext'

const Navigationbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mursu Ji</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/services">Services</Nav.Link> */}
            <Nav.Link href="/gallary">Gallary</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
             {isAuthenticated() ? (
              <>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
             <NavDropdown
                title={<><FaUser className="me-1" /> Account</>}
                align="end"
              >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => logout(navigate)}>
                  <FaSignOutAlt className="me-1" /> Logout
                </NavDropdown.Item>
            </NavDropdown>
            
            </>
          ) : (
             <Nav.Link href="/login">Login</Nav.Link>
          )}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {/* <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyApp
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
            {isAuthenticated() ? (
              <>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-links">Dashboard</Link>
              
              
            </li>
            <li className="nav-links"><Button variant="light" onClick={() => logout(navigate)}>Logout</Button></li>
            </>
          ) : (
            <li className="nav-item">
            <Link to="/login" className="nav-links">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav> */}
     
    </>
  );
};

export default Navigationbar;