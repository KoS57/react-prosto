const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState={
  
    posts: [
    { id: 1, art: 'Эта картина прекрасна', likesCount: 12 },
    { id: 2, art: 'Я с вами согласен', likesCount: 34 }
  ],
    newPostText: 'it-kamasutra.com',
  }


const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      
        let newText = {
          id: 3,
          art: state.newPostText,
          likesCount: 0
        };
        return{
          ...state,
          posts:[...state.posts,newText],
          newPostText: ''
        };
    case UPDATE_NEW_POST_TEXT:
      return{
        ...state,
        newPostText: action.newText
      };
    default: 
            return state;
  }
} 
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}


  export default profileReducer;
