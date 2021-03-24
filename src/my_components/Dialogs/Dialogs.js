import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component='textarea'
                name='newMessageElement'
                placeholder='Enter your message'
            />
            <button>Add message</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

const Dialogs = (props) => {

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

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageElement);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
}

export default Dialogs;