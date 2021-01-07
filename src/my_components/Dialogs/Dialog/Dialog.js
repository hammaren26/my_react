import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={props.className}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;