import { takeEvery, call, put, select } from 'redux-saga/effects';

import { ACTION_TYPES } from './constants';
import movies from '../../constants/API/Axios';
import requests from 'constants/API/MovieApi';

function getApi() {
  return movies.get(requests.fetchActionMovie);
}

function* fetchActionMovies() {
  try {
    const movieList = yield call(getApi);

    yield put({
      type: ACTION_TYPES.FETCH_ACTION_SUCCESS,
      payload: movieList.data.results,
    });
  } catch (e) {
    yield put({
      type: FETCH_ACTION_ERROR,
      message: e.message,
    });
  }
}

// Individual exports for testing
export default function* actionMovieSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_ACTION_REQUEST, fetchActionMovies);
}
