import { userApi, profileAPI } from "../components/API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {

  posts: [
    { id: 1, art: 'Эта картина прекрасна', likesCount: 12 },
    { id: 2, art: 'Я с вами согласен', likesCount: 34 }
  ],
  newPostText: 'it-kamasutra.com',
  profile: null,
  status:""

}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:

      let newText = {
        id: 3,
        art: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newText],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile }
    };
    case SET_STATUS: {
      return { ...state, status: action.status }
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
export const setUsersProfile = (profile) => {
  return { type: SET_USERS_PROFILE, profile }
}

export const setStatus = (status) => {
  return { type: SET_STATUS, status }
}

export const getUserProfile = (userId) => (dispatch) => {
  userApi.getProfile(userId).then(response => {
    dispatch(setUsersProfile(response.data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if(response.data.resultCode === 0){
    dispatch(setStatus(status));
    }
  });
}
export default profileReducer;
