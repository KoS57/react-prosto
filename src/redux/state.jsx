import profileReducer from "./profile-reduce";
import dialogsReducer from "./dialogs-reduce";



let store = {
  _state: {
    profilePage: {
      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you it-kamasiutr?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      dialogs:[
        {id:1, name: "Dimych"},
        {id:2, name: "Andrew"},
        {id:3, name: "Sveta"},
        {id:4, name: "Sacha"},
        {id:5, name: "Viktor"},
        {id:6, name: "Valera"},
      ],
      newMessageText: 'введите сообщение',
    },
   
    arts:{
      posts: [
      { id: 1, art: 'Эта картина прекрасна', likesCount: 12 },
      { id: 2, art: 'Я с вами согласен', likesCount: 34 }
    ],
      newPostText: 'it-kamasutra.com',
    }
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state change');
  },

  dispatch(action) {
    this._state.arts=profileReducer(this._state.arts,action);
    this._state.profilePage=dialogsReducer(this._state.profilePage,action);
    this._callSubscriber(this._state);
}
}


export default store;
window.store = store;