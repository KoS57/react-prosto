import { authAPI } from "../components/API/api";
import {stopSubmit} from 'redux-form'

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
        ...action.payload
      } 
    default:
      return state;
  }
}

export const setAuthSetUserData = (id, email, login,isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login,isAuth } });
export const getAuthSetUserData=()=>(dispatch)=>{
  authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
        let { id, email, login} = response.data.data
        dispatch(setAuthSetUserData(id, email, login,true));
    }
});
return 'Yoooo'
}

export const login=(email,password,rememberMe)=>(dispatch)=>{
  authAPI.login(email,password,rememberMe).then(response => {
    if (response.data.resultCode === 0) {
        dispatch(getAuthSetUserData());
    }
    else {
      let message=response.data.messages.length>0 ? response.data.messages[0] :"Some error";
      dispatch(stopSubmit("login",{_error:message}));
    }

});
}

export const logout=()=>(dispatch)=>{
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
        dispatch(setAuthSetUserData(null,null,null,false));
    }
});
}

export default authReduser;
