import {combineReducers} from 'redux';
import {searchChangeReducer} from './SearchField/SearchField.reducers';
import {MonstersReducer} from './Monsters/Monsters.reducers';

const rootReducer = combineReducers({
  monstersList: MonstersReducer,
  searchField: searchChangeReducer,
});

export default rootReducer;
