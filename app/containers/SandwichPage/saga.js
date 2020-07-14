import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DETAILS } from 'containers/App/constants';
import { detailsLoaded, detailsLoadingError } from 'containers/App/actions';
import request from 'utils/request';

export function* getDetails(id) {
  const requestURL = `http://localhost:3000/api/${id}`;
  try {
    const resp = yield call(request, requestURL);
    yield put(detailsLoaded(resp.data));
  } catch (err) {
    yield put(detailsLoadingError(err));
  }
}

export default function* detailsData() {
  yield takeLatest(LOAD_DETAILS, getDetails);
}