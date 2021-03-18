import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers/index';
import thunk from'redux-thunk' ;
import logger from 'redux-logger';
import {expReducer} from '../expenseTrackerRedux/reducer/ExpReducerIndex'

const store = createStore(combineReducers({reducer, expReducer}), applyMiddleware(thunk, logger));

export default store;