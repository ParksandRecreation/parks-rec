import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //links to other routes in react router dom
  return (<div className='Navbar'>
    <Link to='/'>
      Log Out
    </Link>
  </div>
  )
}

export default Navbar;