import React from 'react'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


export default function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className='content__head'>
            <img src={props.profile.photos.large}
                 alt="placeholder"
            />
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}
            />
        </div>
    );
}