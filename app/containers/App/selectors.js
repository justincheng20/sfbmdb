import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectSandwiches = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.sandwiches,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectDetails = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.sandwiches,
  );

const makeSelectAlbums = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.albums,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectSandwiches,
  makeSelectLocation,
  makeSelectDetails,
  makeSelectAlbums,
};
