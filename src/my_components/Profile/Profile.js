import React from 'react'
import {content} from './Profile.module.scss'
import MyPosts from "./My posts/MyPosts";


export default function Profile() {
    return (
        <div className={content}>
            <div className='content__head'>
                <img src="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"
                     alt="placeholder+image"/>
            </div>
            <MyPosts/>
        </div>
    );
}