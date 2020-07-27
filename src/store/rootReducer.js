import { combineReducers } from 'redux';
import carReducer from "./cars/carReducer";
import motorReducer from "./motors/motorReducer";
import usersReducer from "./users/userReducer";

const rootReducer = combineReducers({
    cars: carReducer,
    motors: motorReducer,
    users: usersReducer
});

export default rootReducer;