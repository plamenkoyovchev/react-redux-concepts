import userActionTypes from "./userActionTypes";

const initialState = {
    users: [],
    loading: false,
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS_START:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            };
        case userActionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default userReducer;