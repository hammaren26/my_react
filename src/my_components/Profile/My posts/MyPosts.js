import React from 'react';
import s from './MyPosts.module.scss';
import Post from "./Post/Post";
import {item, active} from './Post/Post.module.css';


export default function MyPosts(props) {

    let posts = props.postsData.map(p => <Post message={p.message} className={`${item}`} likes={p.likesCount}/>);
    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();
    }


    let onUpdateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.posts}>
            <h3>
                My posts:
            </h3>
            {posts}
            <div>
                <textarea
                    onChange={onUpdateNewPostText}
                    ref={newPostElement}
                    cols="30"
                    rows="10"
                    value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={onAddPost}>
                    Add post
                </button>
            </div>
        </div>
    );
}