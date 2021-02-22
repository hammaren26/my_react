import React from 'react'
import Preloader from "../../common/preloader/Preloader";


export default function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className='content__head'>
            <img src={props.profile.photos.large}
                 alt="placeholder+image"
            />
            <div>
                Статус: {props.profile.aboutMe}
            </div>
        </div>
    );
}