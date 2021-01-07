import React from 'react'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export default function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}