import React from 'react';

import Navigation from './Navigation';
import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className='Main-Header'>
      <h1>Well come to my webpage</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
