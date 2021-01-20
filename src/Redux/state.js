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

        }

    },
    _callSubscriber() {
        console.log('this._state was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0

        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
         if (action.type == 'ADD_POST') {
             let newPost = {
                 id: 5,
                 message: this._state.profilePage.newPostText,
                 likesCount: 0

             };
             this._state.profilePage.postsData.push(newPost);
             this._state.profilePage.newPostText = '';
             this._callSubscriber(this._state);
         } else if (action.type == 'UPDATE_NEW_POST_TEXT') {
             this._state.profilePage.newPostText = action.newText;
             this._callSubscriber(this._state);
         }
    }
}

export default store;
window.store = store;