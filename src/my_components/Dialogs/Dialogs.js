import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Igor'}
    ];

    let messagesData = [
        {id: 1, text: 'Hello bitches'},
        {id: 2, text: 'Hello'},
        {id: 3, text: 'bitches'}
    ];



    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} className={s.dialogs_item}/>),
        messagesElements = messagesData.map(message => <Message className={s.message} text={message.text}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;