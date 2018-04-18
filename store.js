import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import rootReducer from './rootReducer';

const appReducer = combineReducers(rootReducer);

const store = createStore(appReducer, applyMiddleware(thunk));
window.store = store;
export default store;