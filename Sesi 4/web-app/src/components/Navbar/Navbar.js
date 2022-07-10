import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="home">
        <h1>QTemu</h1>
      </div>
      <ul className="navigation">
        <li>
          <a href="#meetup" className="mid">
            Create Meetup
          </a>
        </li>
        <li>
          <a href="#explore" className="mid">
            Explore
          </a>
        </li>
      </ul>
      <ul className="login">
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
