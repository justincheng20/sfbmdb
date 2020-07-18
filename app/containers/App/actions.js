import {
  LOAD_SANDWICHES,
  LOAD_SANDWICHES_SUCCESS,
  LOAD_SANDWICHES_ERROR,
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
