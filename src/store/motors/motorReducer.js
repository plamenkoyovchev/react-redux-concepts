import motorActionTypes from "./motorActionTypes";

const initialState = {
    availableMotors: 100
};

const motorReducer = (state = initialState, action) => {
    switch (action.type) {
        case motorActionTypes.BUY_MOTOR:
            return {
                ...state,
                availableMotors: state.availableMotors - 1
            }
        default:
            return state;
    };
};

export default motorReducer;