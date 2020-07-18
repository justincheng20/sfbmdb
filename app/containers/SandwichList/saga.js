import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_SANDWICHES } from 'containers/App/constants';
import {
  sandwichesLoaded,
  sandwichesLoadingError,
} from 'containers/App/actions';
import request from 'utils/request';

export function* getSandwiches() {
  const requestURL = `http://localhost:3000/api`;
  try {
    const resp = yield call(request, requestURL);
    yield put(sandwichesLoaded(resp.data));
  } catch (err) {
    yield put(sandwichesLoadingError(err));
  }
}

export default function* sandwichesData() {
  yield takeLatest(LOAD_SANDWICHES, getSandwiches);
}
