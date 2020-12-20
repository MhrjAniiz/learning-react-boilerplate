import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ACTION_TYPES } from './constants';
import movies from '../../constants/API/Axios';
import requests from 'constants/API/MovieApi';

function getApi() {
  return movies.get(requests.fetchNetflixOriginals);
}

function* fetchNetflix() {
  try {
    const movieList = yield call(getApi);

    yield put({
      type: ACTION_TYPES.FETCH_NETFLIX_ORIGINALS_SUCCESS,
      payload: movieList.data.results,
    });
  } catch (e) {
    yield put({
      type: FETCH_NETFLIX_ORIGINALS_ERROR,
      message: e.message,
    });
  }
}

// Individual exports for testing
export default function* netFlixOriginalsSaga() {
  yield takeEvery(ACTION_TYPES.FETCH_NETFLIX_ORIGINALS_REQUEST, fetchNetflix);
}
