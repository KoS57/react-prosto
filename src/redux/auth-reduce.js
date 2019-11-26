import { authAPI } from "../components/API/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}


const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      } 
    default:
      return state;
  }
}

export const setAuthSetUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const getAuthSetUserData=()=>(dispatch)=>{
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthSetUserData(id, email, login));
    }
});
}

export default authReduser;
