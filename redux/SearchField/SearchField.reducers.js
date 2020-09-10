import {searchFieldTypes} from './SearchField.types';

const initialState = {
  searchText: '',
  orientation: '',
};

export const searchChangeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case searchFieldTypes.HANDLE_SEARCH_CHANGE:
      return {
        ...state,
        searchText: action.payload,
      };
    case searchFieldTypes.HANDLE_DEVICE_ORIENTATION:
      return {
        ...state,
        orientation: action.payload,
      };
    default:
      return state;
  }
};
