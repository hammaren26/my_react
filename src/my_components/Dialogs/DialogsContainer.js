import React from 'react'
import {addNewMessageCreator, updateMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//         {
//             store => {
//                 let state = store.getState();
//                 let addMessage = (text) => {
//                     if (text.length > 0) {
//                         store.dispatch(addNewMessageCreator());
//                     }
//
//                 }
//                 let updateNewMessageText = (text) => {
//                     store.dispatch(updateMessageActionCreator(text));
//                 }
//
//                 return (
//                     <Dialogs
//                         dialogsData={state.messagesPage.dialogsData}
//                         messagesData={state.messagesPage.messagesData}
//                         newMessageText={state.messagesPage.newMessageText}
//                         updateNewMessageText={updateNewMessageText}
//                         addMessage={addMessage}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        newMessageText: state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateMessageActionCreator(text));
        },
        addMessage: (text) => {
            if (text.length > 0) {
                dispatch(addNewMessageCreator());
            }
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;