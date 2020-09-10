import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
