import React, { useState, useEffect } from 'react';
import './Topbar.css';
import Logo from '../../images/1280px-Netflix_2015_logo.svg.png';
import { Link, Redirect } from 'react-router-dom';
import { isLogin, clearLocalSession } from '../../utils/localStorage';

function Topbar() {
  const [show, handleShow] = useState(false);

  const handleLogOut = () => {
    clearLocalSession();
    location.replace('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <Link to="/">
        <img className="nav__logo" src={Logo} alt="" />
      </Link>
      {isLogin() ? (
        <button onClick={handleLogOut} className="nav__logout">
          Log Out
        </button>
      ) : (
        <Link to="/login">
          <button className="nav__signIn">Sign In</button>
        </Link>
      )}
    </div>
  );
}

export default Topbar;
