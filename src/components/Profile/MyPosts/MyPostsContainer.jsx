import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduce'
import MyPosts from './MyPosts'


const MyPostsContainer = (props) => {
 let state=props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());

  }
  let onPostChange = (text) => {
   let action =updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} artData={state.arts.posts}
  newPostText={state.arts.newPostText}/>
};
export default MyPostsContainer;