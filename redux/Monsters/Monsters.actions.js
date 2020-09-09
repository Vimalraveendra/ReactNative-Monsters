import {MonstersTypes} from './Monsters.types';

const fetchMonstersStart = () => ({
  type: MonstersTypes.REQUEST_MONSTERS_DATA_START,
});

const fetchMonstersSuccess = (data) => ({
  type: MonstersTypes.REQUEST_MONSTERS_DATA_SUCCESS,
  payload: data,
});

const fetchMonstersFailure = (error) => ({
  type: MonstersTypes.REQUEST_MONSTERS_DATA_FAILURE,
  payload: error,
});

export const fetchedMonstersData = () => async (dispatch) => {
  dispatch(fetchMonstersStart);
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    dispatch(fetchMonstersSuccess(data));
  } catch (error) {
    dispatch(fetchMonstersFailure(error));
  }
};
