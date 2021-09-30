import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./index-reducer";
import rootSagas from "./index-saga";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["todoReducer"],
  stateReconciler: autoMergeLevel2,
};
const pReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();



export const store = createStore(pReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSagas);