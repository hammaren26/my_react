import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// export default function MyPostsContainer() {
//
//     return (
//         <StoreContext.Consumer>
//         {
//             store => {
//                 let state = store.getState() ;
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 let updateNewPostText = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 }
//                 return (
//                     <MyPosts
//                         updateNewPostText={updateNewPostText}
//                         addPost={addPost}
//                         postsData={state.profilePage.postsData}
//                         newPostText={state.profilePage.newPostText}
//                     />
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }



let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: (text) => {
            dispatch(addPostActionCreator());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default DialogsContainer;