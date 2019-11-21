import React from 'react';
import ProfileInfo from "../ProfileInfo/ProfileInfo"
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo profile={props.profile} contacts={props.contacts} />
      <MyPostsContainer/>
      </div>
  )
}
 
export default Profile;