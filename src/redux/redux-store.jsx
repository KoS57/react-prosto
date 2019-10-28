import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reduce'
import dialogsReducer from './dialogs-reduce'


let reducer= combineReducers({
   profilePage: profileReducer,
    dialogPage:dialogsReducer
});
let store= createStore(reducer);

export default store; 