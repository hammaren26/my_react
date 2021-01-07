import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {item, active} from './Post/Post.module.css'

export default function MyPosts() {

    let postsData = [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'how are you', likesCount: 25},
        {id: 3, message: 'bitch', likesCount: 3}
    ];

    let posts = postsData.map(p => <Post message={p.message} className={`${item}`} likes={p.likesCount}/>);

    return (
        <div className={s.posts}>
            <h3>
                My posts:
            </h3>
            {posts}
        </div>
    );
}