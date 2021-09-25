import { UserActionTypes } from "./user.types";
const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user,
    };
};

const logOutUser = (user) => {
    return {
        type:UserActionTypes.LOGOUT_USER,
    }
}

export {setCurrentUser, logOutUser};
