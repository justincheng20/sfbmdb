import {
  LOAD_SANDWICHES,
  LOAD_SANDWICHES_SUCCESS,
  LOAD_SANDWICHES_ERROR,
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS_ERROR,
  LOAD_ALBUMS,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUMS_ERROR,
} from './constants';

export function loadSandwiches() {
  return {
    type: LOAD_SANDWICHES,
  };
}

export function sandwichesLoaded(sandwiches) {
  return {
    type: LOAD_SANDWICHES_SUCCESS,
    sandwiches,
  };
}

export function sandwichesLoadingError(error) {
  return {
    type: LOAD_SANDWICHES_ERROR,
    error,
  };
}

export function loadDetails(id) {
  return {
    type: LOAD_DETAILS,
    id,
  };
}

export function detailsLoaded(details, id) {
  return {
    type: LOAD_DETAILS_SUCCESS,
    details,
    id,
  };
}

export function detailsLoadingError(error) {
  return {
    type: LOAD_DETAILS_ERROR,
    error,
  };
}

export function loadAlbums(title) {
  return {
    type: LOAD_ALBUMS,
    title,
  };
}

export function albumsLoaded(albums) {
  return {
    type: LOAD_ALBUMS_SUCCESS,
    albums,
  };
}

export function albumsLoadingError(error) {
  return {
    type: LOAD_ALBUMS_ERROR,
    error,
  };
}
