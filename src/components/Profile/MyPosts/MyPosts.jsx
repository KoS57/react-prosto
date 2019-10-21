import React from 'react';
import s from "./MyPosts.module.css"
import Posts from './Posts/Posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduce'





const MyPosts = (props) => {
  let artElement = props.artData.map(a => <Posts art={a.art} likesCount={a.likesCount} id={a.id} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());

  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return <div className={s.postsBlock}>
    <h3> May post</h3>
    <div>
      <textarea ref={newPostElement} onChange={onPostChange}
        value={props.newPostText}></textarea>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {artElement}
    </div>

  </div>

}

export default MyPosts;