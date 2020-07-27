import userActionTypes from "./userActionTypes";
import axios from "axios";

const fetchUsersStart = () => {
    return {
        type: userActionTypes.FETCH_USERS_START
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: userActionTypes.FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUsersFailure = (error) => {
    return {
        type: userActionTypes.FETCH_USERS_FAILURE,
        payload: error
    };
};

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersStart);
        axios.get('')
            .then((response) => {
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};