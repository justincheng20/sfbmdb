import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DETAILS } from 'containers/App/constants';
import { detailsLoaded, detailsLoadingError } from 'containers/App/actions';
import request from 'utils/request';

export function* getDetails(action) {
  let id = action.id;
  const requestURL = `http://localhost:3000/api/sandwiches/${id}`;
  console.log(requestURL);
  try {
    const resp = yield call(request, requestURL);
    console.log(resp);
    yield put(detailsLoaded(resp, id));
  } catch (err) {
    yield put(detailsLoadingError(err));
  }
}

export default function* detailsData() {
  yield takeLatest(LOAD_DETAILS, getDetails);
}
