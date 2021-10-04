import React, { useState, useEffect } from 'react';


import Home from './components/HomePage/Home';
import PageLogin from './components/LoginPage/PageLogin';
import MainHeader from './components/MainHeader/MainHeader';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <PageLogin onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>

    </>
  )
}

export default App;
