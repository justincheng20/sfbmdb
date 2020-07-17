import produce from 'immer';
import {
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS,
  LOAD_ITEMS_ERROR,
  ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  LOAD_DETAILS_SUCCESS,
  LOAD_DETAILS,
  LOAD_DETAILS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {
    items: false,
  },
  details: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ITEMS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_ITEMS_SUCCESS:
        draft.data = { items: action.items };
        draft.loading = false;
        break;

      case LOAD_ITEMS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_ITEM:
        draft.loading = true;
        draft.error = false;
        break;

      case ADD_ITEM_SUCCESS:
        // Can make API call here if we have no data
        if (state.data.items) {
          draft.data.items = [action.item, ...state.data.items];
        } else {
          draft.data.items = [action.item];
        }
        draft.loading = false;
        break;

      case ADD_ITEM_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_DETAILS:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_DETAILS_SUCCESS:
        console.log(action)
        draft.details = action.details;
        draft.loading = false;
        break;

      case LOAD_DETAILS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
