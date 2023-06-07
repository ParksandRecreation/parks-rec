import React from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const Navbar = () => {
  //links to other routes in react router dom

  const handleLogOut = () => {
    localStorage.removeItem('given_name');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('picture');
    localStorage.removeItem('loginWith');
  };

  const location = useLocation();
  
  const roomName = location.state && location.state.roomName ? 'ROOM: ' + location.state.roomName : '';

  return (
    <div className="Navbar">
      <h1>{roomName}</h1>
      <Link onClick={() => handleLogOut()} to="/">
        Log Out
      </Link>
    </div>
  );
};

export default Navbar;
