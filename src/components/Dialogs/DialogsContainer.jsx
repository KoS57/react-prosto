import React from 'react';
import { connect } from 'react-redux'
import { addMessActionCreator } from '../../redux/dialogs-reduce'
import Dialogs from './Dialogs'
import { widthAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux'



const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,

    }
}

const mapDispatchProps = (dispatch) => {
    return {
        addMess: (newMessageText) => {
            dispatch(addMessActionCreator(newMessageText));
        }
    }
}
export default
    compose(
        connect(mapStateToProps, mapDispatchProps),
        widthAuthRedirect)(Dialogs);