import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./index-reducer";
import rootSagas from "./index-saga";

import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

export default store;
