/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="button-div">
      <Link to="/robots">
        <button> robot page</button>
      </Link>
      <Link to="/login">
        <button> login</button>
      </Link>
    </div>
  );
}
