import React from 'react'

export default function Post(props) {
    return (
        <div className={props.className}>
            <span>{props.message}</span>
            <span>Likes: {props.likes}</span>
        </div>
    );
}