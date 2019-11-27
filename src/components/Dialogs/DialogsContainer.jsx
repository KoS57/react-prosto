import React from 'react';
import {connect} from 'react-redux'
import { addMessActionCreator, updateNewMessTextActionCreator } from '../../redux/dialogs-reduce'
import Dialogs from './Dialogs'
import { widthAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux'



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





export default 
compose(
    connect(mapStateToProps,mapDispatchProps),
    widthAuthRedirect)
(Dialogs);