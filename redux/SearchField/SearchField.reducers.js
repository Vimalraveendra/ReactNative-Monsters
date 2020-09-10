import {searchFieldTypes} from './SearchField.types';

const initialState = {
  searchText: '',
};

export const searchChangeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case searchFieldTypes.HANDLE_SEARCH_CHANGE:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};
