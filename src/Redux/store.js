import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello', likesCount: 12},
                {id: 2, message: 'how are you', likesCount: 25},
                {id: 3, message: 'bitch', likesCount: 3}
            ],
            newPostText: 'it-Kamasutra.com'
        },

        messagesPage: {
            newMessageText: 'it-Kamasutra.com',
            messagesData: [
                {id: 1, text: 'Hello bitches'},
                {id: 2, text: 'Hello'},
                {id: 3, text: 'bitches'}
            ],

            dialogsData: [
                {id: 1, name: 'Slava', age: 30},
                {id: 2, name: 'Andrey', age: 25},
                {id: 3, name: 'Igor', age: 18}
            ]

        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('this._state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;