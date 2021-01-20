import React from "react";


const Message = (props) => {
    return (
        <div className={props.className}>{props.text}</div>
    );
}

export default Message;