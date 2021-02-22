const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'how are you', likesCount: 25},
        {id: 3, message: 'bitch', likesCount: 3}
    ],
    newPostText: 'it-Kamasutra.com',
    userProfile: null
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0

            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            };

        default:
            return state;
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}

export default profileReducer;