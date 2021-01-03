import React from 'react'
import {posts} from './MyPosts.module.scss'
import Post from "./Post/Post";
import {item, active} from './Post/Post.module.css'

export default function MyPosts() {
    return (
        <div className={posts}>
            <h3>
                My posts:
            </h3>
            <Post text='Hello' className={`${item} ${active}`}/>
            <Post text='how are you'/>
            <Post text='bitch'/>
        </div>
    );
}