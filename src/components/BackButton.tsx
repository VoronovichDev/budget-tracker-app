import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link className="nav-button back" to="/">
      Go back
    </Link>
  );
};

export default BackButton;
