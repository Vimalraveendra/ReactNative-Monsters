import {searchFieldTypes} from './SearchField.types';

export const searchChange = (text) => ({
  type: searchFieldTypes.HANDLE_SEARCH_CHANGE,
  payload: text,
});
