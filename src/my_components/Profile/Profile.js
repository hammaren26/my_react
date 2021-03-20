import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";


export default function Profile(props) {
    // debugger
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}