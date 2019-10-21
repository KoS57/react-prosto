import React from 'react';
import s from "./Posts.module.css"

const Posts = (props)=>{

  return   (  
      <div className={s.item}>
        <img src="https://images.unsplash.com/photo-1496483648148-47c686dc86a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
        {props.art}
        <div>
          <span>Like {props.likesCount}</span>
        </div>
      </div>
  )
}

export default Posts;