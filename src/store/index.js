import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import thunk from "redux-thunk";

import bagsReducer from './modules/bags/reducer'

const reducers = combineReducers({
  bags: bagsReducer
});

const store = configureStore({reducer: reducers}, applyMiddleware(thunk));

export default store;