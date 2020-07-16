import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_ERROR,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  LOAD_DETAILS,
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS_ERROR,
} from './constants';

export function loadItems() {
  return {
    type: LOAD_ITEMS,
  };
}

export function itemsLoaded(items) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    items,
  };
}

export function itemsLoadingError(error) {
  return {
    type: LOAD_ITEMS_ERROR,
    error,
  };
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function itemAdded(item) {
  return {
    type: ADD_ITEM_SUCCESS,
    item,
  };
}

export function addItemError(error) {
  return {
    type: ADD_ITEM_ERROR,
    error,
  };
}

export function loadDetails(id) {
  return {
    type: LOAD_DETAILS,
    id,
  };
}

export function detailsLoaded(details) {
  return {
    type: LOAD_DETAILS_SUCCESS,
    details,
  };
}

export function detailsLoadingError(error) {
  return {
    type: LOAD_DETAILS_ERROR,
    error,
  };
}