import {MonstersTypes} from './Monsters.types';

const initialState = {
  monsters: [],
  isLoading: false,
  error: '',
  orientation: '',
};

export const MonstersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MonstersTypes.REQUEST_MONSTERS_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case MonstersTypes.REQUEST_MONSTERS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        monsters: action.payload,
      };
    case MonstersTypes.REQUEST_MONSTERS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
