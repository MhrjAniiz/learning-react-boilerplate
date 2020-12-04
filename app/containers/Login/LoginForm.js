import React from 'react';
import { useInjectSaga } from 'utils/injectSaga';
import './index.css';
import saga from './saga';
import { Redirect } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import Navbar from 'components/Navbar';

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
  console.log(authenticated);

  return (
    <div>
      <div className="form-body">
        <h3>LOGIN</h3>
        <input
          value={name}
          type="email"
          className=" input"
          placeholder="userName"
          onChange={e => onNameChange(e.target.value)}
        />
        <input
          value={password}
          type="password"
          className=" input"
          placeholder="password"
          onChange={e => onPasswordChange(e.target.value)}
        />
        <button
          disabled={!name || !password}
          className="button"
          type="submit"
          onClick={submit}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
