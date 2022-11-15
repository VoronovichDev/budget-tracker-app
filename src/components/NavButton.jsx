import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = () => {
  return (
    <Link className="nav-button" to="/charts">
      Charts
    </Link>
  );
};

export default NavButton;
