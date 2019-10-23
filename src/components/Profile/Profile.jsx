import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import { tsPropertySignature } from '@babel/types';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>

      {/* //  artData={props.artData} 
      // dispatch={props.dispatch} 
      // dispatch={props.dispatch}
      // newPostText={props.newPostText}     */}
      </div>
  )
}

export default Profile;