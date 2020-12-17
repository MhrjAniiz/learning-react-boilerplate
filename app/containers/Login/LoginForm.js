import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import './index.css';
import saga from './saga';
import { Redirect, Link } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import Logo from '../../images/1280px-Netflix_2015_logo.svg.png';
import { FacebookOutlined } from '@ant-design/icons';

export default function LoginForm({
  logout,
  authenticated,
  submit,
  onNameChange,
  onPasswordChange,
  name,
  password,
}) {
  useInjectSaga({ key: 'login', saga });
  useInjectReducer({ key: 'login', reducer });
  if (authenticated) return <Redirect to="/robots" />;

  return (
    <div className="form-main">
      <div className="blackscreen">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="form-container">
          <div className="form-body">
            <div className="content-holder">
              <h3>Sign In</h3>
              <input
                value={name}
                type="email"
                className=" input"
                placeholder="Email or phone number"
                onChange={e => onNameChange(e.target.value)}
              />
              <input
                value={password}
                type="password"
                className=" input"
                placeholder="Password"
                onChange={e => onPasswordChange(e.target.value)}
              />
              <button
                disabled={!name || !password}
                className="button"
                type="submit"
                onClick={submit}
              >
                Sign In
              </button>

              <div className="additional">
                <div className="checkbox">
                  <input type="checkbox" />
                  <label> Remember me</label>
                </div>
                <p>Need help?</p>
              </div>

              <div className="information">
                <p>
                  <img
                    style={{ width: '20px', marginRight: '10px' }}
                    src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                    alt=""
                  />
                  Login with Facebook
                </p>
                <p>
                  New to NetFlix ? <strong>Sign Up now.</strong>
                </p>
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{' '}
                  <span style={{ color: '#003FA9' }}>Learn more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-footer">
          <p>questions? contact us.</p>

          <div className="list">
            <ul>
              <li>FAQ</li>
              <li>Cookie Preferences</li>
            </ul>
            <ul>
              <li>FAQ</li>
              <li>Cookie Preferences</li>
            </ul>
            <ul>
              <li>Terms of Use</li>
            </ul>
            <ul>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
