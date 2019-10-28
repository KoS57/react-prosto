import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduce'
import MyPosts from './MyPosts'
import React from 'react'

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}
const mapDispatchProps = (dispatch) => {
  return{onAddPost: () => {
    dispatch(addPostActionCreator());
  },
  updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchProps)(MyPosts)
export default MyPostsContainer;