import React from 'react'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export default function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}