import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let dialogsElements = props.dialogsData.map(dialog => {
        return (
            <DialogItem
                name={dialog.name} id={dialog.id}
                age={dialog.age}
                className={s.dialogs_item}
            />
        )
    });
    let messagesElements = props.messagesData.map(message => {
        return (
            <Message
                className={s.message}
                text={message.text}
            />
        )
    });

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    }

    let updateNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea
                    ref={newMessageElement}
                    cols="30"
                    rows="10"
                    onChange={updateNewMessageText}
                    value={props.newMessageText}
                />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;