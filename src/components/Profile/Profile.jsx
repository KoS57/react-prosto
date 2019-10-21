import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import { tsPropertySignature } from '@babel/types';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts artData={props.artData} 
      dispatch={props.dispatch} 
      dispatch={props.dispatch}
      newPostText={props.newPostText}/>
    </div>
  )
}

export default Profile;