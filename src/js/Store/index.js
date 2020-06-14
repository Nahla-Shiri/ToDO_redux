import { createStore } from 'redux';
import { combineReducer } from '../Reducers';

const initialState = {};

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__();

const Store = createStore(combineReducer, initialState, reduxDevtools);

export default Store;



