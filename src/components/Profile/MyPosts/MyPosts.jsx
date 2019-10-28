import React from 'react';
import s from "./MyPosts.module.css"
import Posts from './Posts/Posts';





const MyPosts = (props) => {
let state=props.profilePage;

  let artElement = state.posts.map(a => <Posts art={a.art} likesCount={a.likesCount} id={a.id} />);
  let newPostElement = React.createRef();

  let AddPost = () => {
    props.onAddPost();

  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={s.postsBlock}>
    <h3> May post</h3>
    <div>
      <textarea ref={newPostElement} onChange={onPostChange}
        value={state.newPostText}></textarea>
      <div>
        <button onClick={AddPost}>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {artElement}
    </div>

  </div>

}

export default MyPosts;