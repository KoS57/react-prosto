import React from 'react'
import s from "./ProfileInfo.module.css"
import { link } from 'fs'
import Preloader from '../Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
           
            <div className={s.description}>
                <img src={props.profile.photos.large} />
            </div>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

            </div>
        </div>
    )
}
export default ProfileInfo;