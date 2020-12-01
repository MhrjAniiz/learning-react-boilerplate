import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
  FETCH_ROBOT,
  FETCH_ROBOT_FAIL,
  FETCH_ROBOT_SUCCESS,
} from './constants';
// Individual exports for testing
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}
function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({
      type: FETCH_ROBOT_SUCCESS,
      payload: users,
    });
  } catch (e) {
    yield put({
      type: FETCH_ROBOT_FAIL,
      message: e.message,
    });
  }
}

export default function* robotApiSaga() {
  yield takeEvery(FETCH_ROBOT, fetchUsers);
}
