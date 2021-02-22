const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, text: text}],
                newMessageText: ''
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                messagesData: [...state.messagesData],
                newMessageText: action.newText
            }

        default:
            return state;
    }
}


export const addNewMessageCreator = () => {
    return {
        type: 'ADD_MESSAGE'
    }
}

export const updateMessageActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newText: text
    }
}

export default dialogsReducer;