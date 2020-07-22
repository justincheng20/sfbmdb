import { call, put, takeLatest } from 'redux-saga/effects';
import { SELECT_ALBUM } from 'containers/App/constants';
import { albumsSelected, albumsSelectingError } from 'containers/App/actions';

export function* selectAlbum() {
  
  try {
    
    yield put(albumsSelected());
  } catch (err) {
    yield put(albumsSelectingError(err));
  }
}

export default function* albumsData() {
  yield takeLatest(SELECT_ALBUM, selectAlbum);
}
