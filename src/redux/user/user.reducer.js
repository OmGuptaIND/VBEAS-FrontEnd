import {UserActionTypes} from './user.types';

const INITIAL_STATE = null

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                ...action.payload
            }
        case UserActionTypes.LOGOUT_USER:
            localStorage.removeItem('_qid');
            return INITIAL_STATE
        default:
            return state;
    }
}

export default userReducer;