import { createStore } from 'redux';
import carReducer from "./cars/carReducer";

const store = createStore(carReducer);

export default store;