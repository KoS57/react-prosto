import { userApi, profileAPI } from "../components/API/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST='DELETE_POST';


 
let initialState = {

  posts: [
    { id: 1, art: 'Эта картина прекрасна', likesCount: 12 },
    { id: 2, art: 'Я с вами согласен', likesCount: 34 }
  ],

  profile: null,
  status: ""

}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:

      let newText = {
        id: 3,
        art: action.newPostElement,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newText],
      };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
      case DELETE_POST:
        return { ...state, posts: state.posts.filter(p=>p.id !== action.postId) };
    default:
      return state;
  }
}
export const addPostActionCreator = (newPostElement) => {
  return {
    type: ADD_POST, newPostElement
  }
}
export const setUsersProfile = (profile) => {
  return { type: SET_USERS_PROFILE, profile }
}

export const setStatus = (status) => {
  return { type: SET_STATUS, status }
}
export const deletePost = (postId) => {
  return { type:  DELETE_POST, postId}
}

export const getUserProfile = (userId) => async(dispatch) => {
  let response=await userApi.getProfile(userId);
    dispatch(setUsersProfile(response.data));
  
}

export const getStatus = (userId) => async(dispatch) => {
 let response=await  profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  
}

export const updateStatus = (status) => async(dispatch) => {
  let response=await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  
}

export default profileReducer;
