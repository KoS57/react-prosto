import React from 'react'
import s from "./ProfileInfo.module.css"
import{indicator} from '../../images/indicator.gif'
import { link } from 'fs'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <img src={indicator}/>
    }
    
    return ( 
        <div>
            <div className={s.img}>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.small}/>
                ava+descriptiion
            </div>
        </div>
    )
}
export default ProfileInfo;