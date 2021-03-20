import {getAuthMe} from "./auth-reducer";

const INITIALIZED = 'INITIALIZED';

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            console.log('initialized')
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSucces = () => {
    return {
        type: 'INITIALIZED'
    }
};

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthMe());
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSucces());
        })
    }
}

export default appReducer;