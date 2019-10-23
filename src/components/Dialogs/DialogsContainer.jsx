import React from 'react';

import { addMessActionCreator, updateNewMessTextActionCreator } from '../../redux/dialogs-reduce'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state=props.store.getState();
    let addMess = () => {
        props.store.dispatch(addMessActionCreator())
    }

    let onMessChange = (text) => {
        let action = updateNewMessTextActionCreator(text);
        props.store.dispatch(action);
    }


    return <Dialogs addMess={addMess} onMessChange={onMessChange} messageData={state.profilePage.messages}
    dialogData={state.profilePage.dialogs} newMessageText={state.profilePage.newMessageText}/>

}

export default DialogsContainer;