const ADD_MESS="ADD-MESS";
const UPDATE_NEW_MESS_TEXT="UPDATE-NEW-MESS-TEXT";

let initialState={ 
 
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
  }

const dialogsReducer=(state=initialState,action)=>{
switch (action.type){
  case ADD_MESS:
      let newMess = {
        id: 6,
        message: state.newMessageText
      };
      state.messages.push(newMess);
      state.newMessageText = '';
    
    return state;
    case UPDATE_NEW_MESS_TEXT:
        state.newMessageText = action.newMess;
        return state;
        default:
        return state;
}
}  
  

export const addMessActionCreator =()=>{
  return{
    type: ADD_MESS
  }
}
export const updateNewMessTextActionCreator=(text)=>{
  return {
    type:UPDATE_NEW_MESS_TEXT, newMess:text
  }
}

export default dialogsReducer;
