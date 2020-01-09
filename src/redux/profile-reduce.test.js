import profileReducer, { addPostActionCreator,deletePost } from "./profile-reduce";

it('new post should be added',()=>{
  //1.test data
  let action=addPostActionCreator('it kamasutra')
  let state = {

    posts: [
      { id: 1, art: 'Эта картина прекрасна', likesCount: 12 },
      { id: 2, art: 'Я с вами согласен', likesCount: 34 }
    ]  
  }
  //2.action
  let newState=profileReducer(state,action)
  //3.expection
  expect(newState.posts.length).toBe(3)
})

it('after deletingleng of art should be decrement',()=>{
  //1.test data
  let action=deletePost(1)
  let state = {

    posts: [
      { id: 1, art: 'Эта картина прекрасна', likesCount: 12 },
      { id: 2, art: 'Я с вами согласен', likesCount: 34 }
    ]  
  }
  //2.action
  let newState=profileReducer(state,action)
  //3.expection
  expect(newState.posts.length).toBe(1)
})

