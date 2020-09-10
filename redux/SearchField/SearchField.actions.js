import {searchFieldTypes} from './SearchField.types';

export const searchChange = (text) => ({
  type: searchFieldTypes.HANDLE_SEARCH_CHANGE,
  payload: text,
});

export const setDeviceOrientation = (width, height) => {
  let text;
  if (width < height) {
    text = 'portrait';
  } else {
    text = 'landscape';
  }
  return {
    type: searchFieldTypes.HANDLE_DEVICE_ORIENTATION,
    payload: text,
  };
};
