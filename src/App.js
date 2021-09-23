import React, { useState } from 'react';
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
    console.log(process.env.REACT_APP_BASE_API) //https://reactjs-api-16d9a-default-rtdb.asia-southeast1.firebasedatabase.app
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
