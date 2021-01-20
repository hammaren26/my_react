import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} age={dialog.age} className={s.dialogs_item}/>),
        messagesElements = props.messagesData.map(message => <Message className={s.message} text={message.text}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
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
                <textarea ref={newMessageElement} cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs;