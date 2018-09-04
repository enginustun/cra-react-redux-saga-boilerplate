import rootReducer from './reducers';
import { combineReducers } from 'redux';

export const combinedReducers = combineReducers({ rootReducer });
