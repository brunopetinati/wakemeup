import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'

// lembrar de deletar esse modulo se não usar
import thunk from "redux-thunk";

import stepReducer from './modules/step/reducer'
import bagsReducer from './modules/bags/reducer'
import paymentReducer from './modules/payment/reducer'

const reducers = combineReducers({
  step: stepReducer,
  payment: paymentReducer,
  bags: bagsReducer
});

const store = configureStore({reducer: reducers}, applyMiddleware(thunk));

export default store;