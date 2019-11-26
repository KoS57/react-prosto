import React from 'react';
import {connect} from 'react-redux'
import { addMessActionCreator, updateNewMessTextActionCreator } from '../../redux/dialogs-reduce'
import Dialogs from './Dialogs'
import { widthAuthRedirect } from '../hoc/AuthRedirect';



const mapStateToProps=(state)=>{
    return{
        dialogPage:state.dialogPage,
        
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
let AuthRedirectComponent=widthAuthRedirect(Dialogs);




const DialogsContainer = connect(mapStateToProps,mapDispatchProps)(AuthRedirectComponent);
export default DialogsContainer;