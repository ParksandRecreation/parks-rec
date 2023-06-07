import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //links to other routes in react router dom

  const handleLogOut = () => {
    localStorage.removeItem('given_name');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('picture');
    localStorage.removeItem('loginWith');
  };

  return (
    <div className="Navbar">
      <Link onClick={() => handleLogOut()} to="/">
        Log Out
      </Link>
    </div>
  );
};

export default Navbar;
