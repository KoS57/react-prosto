import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer/>

      {/* //  artData={props.artData} 
      // dispatch={props.dispatch} 
      // dispatch={props.dispatch}
      // newPostText={props.newPostText}     */}
      </div>
  )
}

export default Profile;