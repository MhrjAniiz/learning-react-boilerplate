import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ACTION_TYPES } from './constants';
import movies from '../../constants/API/Axios';
import requests from 'constants/API/MovieApi';

function getApi() {
  return movies.get(requests.fetchDocumentries);
}

function* fetchDocumentries() {
  try {
    const movieList = yield call(getApi);

    yield put({
      type: ACTION_TYPES.FETCH_DOCUMENTRIES_SUCCESS,
      payload: movieList.data.results,
    });
  } catch (e) {
    yield put({
      type: ACTION_TYPES.FETCH_DOCUMENTRIES_ERROR,
      message: e.message,
    });
  }
}
// Individual exports for testing
export default function* documentriesSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(ACTION_TYPES.FETCH_DOCUMENTRIES_REQUEST, fetchDocumentries);
}
