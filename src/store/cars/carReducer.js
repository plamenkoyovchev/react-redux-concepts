import carActionTypes from "./carActionTypes";

const initialState = {
    availableCars: 100,
    loading: false,
    error: ''
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case carActionTypes.BUY_CAR:
            return {
                ...state,
                loading: true,
                error: '',
                availableCars: state.availableCars - 1
            };
        default:
            return state;
    };
};

export default carReducer;