const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, text: action.newText}]
            }
        default:
            return state;
    }
}


export const addNewMessageCreator = (text) => {
    return {
        type: 'ADD_MESSAGE',
        newText: text
    }
}

export default dialogsReducer;