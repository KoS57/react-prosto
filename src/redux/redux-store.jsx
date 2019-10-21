import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reduce'
import dialogsReducer from './dialogs-reduce'


let reducer= combineReducers({
    arts:profileReducer,
     profilePage:dialogsReducer
});
let store= createStore(reducer);

export default store;