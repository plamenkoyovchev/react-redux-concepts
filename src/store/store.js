import { createStore, applyMiddleware } from 'redux';
import { componseWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, componseWithDevTools(applyMiddleware(logger)));

export default store;