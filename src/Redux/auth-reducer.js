import {authAPI, myAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}})

export const getAuthMe = () => {
    return (dispatch) => {
        return myAPI.getAuthMe().then(response => {
            if (response.resultCode === 0) {
                let {login, id, email} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthMe());
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;