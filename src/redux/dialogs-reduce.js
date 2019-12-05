const ADD_MESS = "ADD-MESS";


let initialState = {

  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you it-kamasiutr?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ],
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sacha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],

}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESS:
      let newMess = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: newMess }],

      };

    default:
      return state;

  }
}


export const addMessActionCreator = (newMessageText) => {
  return { type: ADD_MESS, newMessageText }
}


export default dialogsReducer;
