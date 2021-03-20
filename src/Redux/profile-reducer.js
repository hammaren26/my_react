import {myAPI, profileApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'how are you', likesCount: 25},
        {id: 3, message: 'bitch', likesCount: 3}
    ],
    userProfile: null,
    userStatus: ''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0

            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            };

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            };

        default:
            return state;
    }
}


export const addPostActionCreator = (text) =>  ({type: ADD_POST, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setUserStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus: userStatus});


export const getProfile = (userId) => {
    return (dispatch) => {
        myAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    }
}



export default profileReducer;