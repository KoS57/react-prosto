const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE ='SET_USERS_PROFILE';



let initialState={
  
    posts: [
    { id: 1, art: 'Эта картина прекрасна', likesCount: 12 },
    { id: 2, art: 'Я с вами согласен', likesCount: 34 }
  ],
    newPostText: 'it-kamasutra.com',
    profile:null
    
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
      case SET_USERS_PROFILE:{
        return{...state, profile: action.profile}
      }
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
export const setUsersProfile=(profile)=>{
  return{type: SET_USERS_PROFILE, profile} 
}



  export default profileReducer;
