import { takeLatest, call, put, select } from 'redux-saga/effects';
import { ACTION_TYPES } from './constants';
import { loginRequestSuccess, loginRequestFail, loginRequest } from './actions';
import { setLocalSession } from '../../utils/localStorage';
import { makeSelectUserName, makeSelectPassword } from './selectors';

function getApi(emailPhone, password) {
  console.log('email:', emailPhone);
  console.log('password: ', password);
  return fetch('http://api.identeq.online/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emailPhone: emailPhone,
      password: password,
      deviceDetail: {
        deviceType: 'WEB',
      },
    }),
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

function* login(action) {
  const emailPhone = yield select(makeSelectUserName());
  const password = yield select(makeSelectPassword());

  try {
    const users = yield call(getApi, emailPhone, password);
    setLocalSession(users);
    yield put({
      type: ACTION_TYPES.LOGIN_REQUEST_SUCCESS,
      account: users.loginResponse.account,
      token: users.loginResponse.token,
    });
  } catch (e) {
    yield put({
      type: ACTION_TYPES.LOGIN_REQUEST_FAIL,
      error: e.message,
    });
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, login);
}
