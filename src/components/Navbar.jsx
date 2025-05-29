import React from 'react';
import { Link } from 'react-router-dom';
import  '../assets/styles/Navbar.css'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="navbar">
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
            <li>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <li>
            <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;