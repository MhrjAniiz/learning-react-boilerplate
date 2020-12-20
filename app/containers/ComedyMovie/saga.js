import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ACTION_TYPES } from './constants';
import movies from '../../constants/API/Axios';
import requests from 'constants/API/MovieApi';

function getApi() {
  return movies.get(requests.fetchComdedyMovie);
}

function* fetchComedy() {
  try {
    const movieList = yield call(getApi);

    yield put({
      type: ACTION_TYPES.FETCH_COMEDY_SUCCESS,
      payload: movieList.data.results,
    });
  } catch (e) {
    yield put({
      type: FETCH_COMEDY_ERROR,
      message: e.message,
    });
  }
}
// Individual exports for testing
export default function* comedyMovieSaga() {
  // See example in containers/HomePage/saga.js

  yield takeEvery(ACTION_TYPES.FETCH_COMEDY_REQUEST, fetchComedy);
}
