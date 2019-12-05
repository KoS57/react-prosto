import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reduce'
import MyPosts from './MyPosts'
import React from 'react'

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}
const mapDispatchProps = (dispatch) => {
  return {
    onAddPost: (newPostElement) => {
      dispatch(addPostActionCreator(newPostElement));
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchProps)(MyPosts)
export default MyPostsContainer;