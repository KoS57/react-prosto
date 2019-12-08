import React from 'react';
import s from "./MyPosts.module.css"
import Posts from './Posts/Posts';
import { reduxForm, Field } from 'redux-form'
import {required,maxLengthCreator} from '../../../utils/validators/validators'
import {Textarea} from '../../Common/FormControls/FormControls'




const maxLength10=maxLengthCreator(10)
const MyPosts = (props) => {
  let state = props.profilePage;

  let artElement = state.posts.map(a => <Posts art={a.art} likesCount={a.likesCount} id={a.id} />);


  let addNewPost = (values) => {
    props.onAddPost(values.newPostElement)
  }
  return <div className={s.postsBlock}>
    <h3> May post</h3>
    <AddPostFormRedux onSubmit={addNewPost} />
    <div className={s.posts}>
      {artElement}
    </div>

  </div>

}
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="newPostElement" validate={[required, maxLength10]} placeholder="enter your post" />
      <div>
        <button >Add post</button>
      </div>
    </form >
  )
}
const AddPostFormRedux = reduxForm({ form: "mypostAddPostForm" })(AddPostForm);

export default MyPosts;