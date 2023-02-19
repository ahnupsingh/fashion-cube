/*
 ** Author: Anup Kumar Singh
 ** Author URL: https://ahnupsingh.github.com
 ** Github URL: https://github.com/ahnupsingh/new-fashion-tailors
 */

import rootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const initialState = {};
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
