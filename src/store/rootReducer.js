import { combineReducers } from 'redux';
import carReducer from "./cars/carReducer";
import motorReducer from "./motors/motorReducer";

const rootReducer = combineReducers({
    cars: carReducer,
    motors: motorReducer
});

export default rootReducer;