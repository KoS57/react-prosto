import React from 'react';
import {connect} from 'react-redux'
import { addMessActionCreator, updateNewMessTextActionCreator } from '../../redux/dialogs-reduce'
import Dialogs from './Dialogs'


const mapStateToProps=(state)=>{
    return{
        dialogPage:state.dialogPage,
        isAuth:state.auth.isAuth
        
    }
}

const mapDispatchProps=(dispatch)=>{
    return{
    addMess: () => {
        dispatch(addMessActionCreator());
    },

    onMessChange: (text) => {
        let action = updateNewMessTextActionCreator(text);
        dispatch(action);
    }
}
}



const DialogsContainer = connect(mapStateToProps,mapDispatchProps)(Dialogs);
export default DialogsContainer;