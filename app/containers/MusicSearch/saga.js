import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ALBUMS } from 'containers/App/constants';
import { albumsLoaded, albumsLoadingError } from 'containers/App/actions';
import request from 'utils/request';

export function* loadAlbums(action) {
  let title = action.title;
  console.log("title", title)
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${title}&api_key=a5a5fbb81ba50325505802b848a0c663&format=json`;
  try {
    // const resp = yield call(request, requestURL);
    // console.log(resp);
    // yield put(albumsLoaded(resp));
  } catch (err) {
    yield put(albumsLoadingError(err));
  }
}

export default function* albumsData() {
  yield takeLatest(LOAD_ALBUMS, loadAlbums);
}