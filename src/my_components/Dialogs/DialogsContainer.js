import {addNewMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

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
        addMessage: (text) => {
            if (text.length > 0) {
                dispatch(addNewMessageCreator(text));
            }
        }
    }
}


let DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;