import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-body">
      <div>
        <p>Questions? contact us.</p>
      </div>

      <div className="list">
        <ul className="firstUl">
          <li>FAQ</li>
          <li>Invester Relationship</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Netflix Originals</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Terms Of use</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <p>Netflix Nepal</p>
      </div>
    </div>
  );
};

export default Footer;
