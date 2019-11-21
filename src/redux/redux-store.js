import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reduce'
import dialogsReducer from './dialogs-reduce'
import usersReduser from './users-reduce'
import authReduser from './auth-reduce'
import thunkMeddleware from 'redux-thunk'


let reducer= combineReducers({
   profilePage: profileReducer,
    dialogPage:dialogsReducer,
    usersPage:usersReduser,
    auth:authReduser
});
let store= createStore(reducer,applyMiddleware(thunkMeddleware));

window.store=store;

export default store; 