import React from 'react';
import s from './MyPosts.module.scss';
import Post from "./Post/Post";
import {item} from './Post/Post.module.css';
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../../Utils/Validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name='newPostText'
                    component={Textarea}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default function MyPosts(props) {

    let posts = props.postsData.map(p => <Post message={p.message} className={`${item}`} likes={p.likesCount}/>);

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={s.posts}>
            <h3>My posts:</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            {posts}
        </div>
    );
}