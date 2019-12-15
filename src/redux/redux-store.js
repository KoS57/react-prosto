import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reduce'
import dialogsReducer from './dialogs-reduce'
import usersReduser from './users-reduce'
import authReduser from './auth-reduce'
import thunkMeddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReduser from "./app-reduce";


let reducer= combineReducers({
   profilePage: profileReducer,
    dialogPage:dialogsReducer,
    usersPage:usersReduser,
    auth:authReduser,
    form:formReducer,
    app:appReduser
});
let store= createStore(reducer,applyMiddleware(thunkMeddleware));

window.store=store;

export default store; 