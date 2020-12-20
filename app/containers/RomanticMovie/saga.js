import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ACTION_TYPES } from './constants';
import movies from '../../constants/API/Axios';
import requests from 'constants/API/MovieApi';

function getApi() {
  return movies.get(requests.fetchRomanticMovie);
}

function* fetchRomantic() {
  try {
    const movieList = yield call(getApi);

    yield put({
      type: ACTION_TYPES.FETCH_ROMANTIC_SUCCESS,
      payload: movieList.data.results,
    });
  } catch (e) {
    yield put({
      type: FETCH_ROMANTIC_ERROR,
      message: e.message,
    });
  }
}

// Individual exports for testing
export default function* topRatedSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(ACTION_TYPES.FETCH_ROMANTIC_REQUEST, fetchRomantic);
}
