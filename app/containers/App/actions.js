import {
  LOAD_SANDWICHES,
  LOAD_SANDWICHES_SUCCESS,
  LOAD_SANDWICHES_ERROR,
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS_ERROR,
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

export function detailsLoaded() {
  return {
    type: LOAD_DETAILS_SUCCESS,
  };
}

export function detailsLoadingError(error) {
  return {
    type: LOAD_DETAILS_ERROR,
    error,
  };
}
