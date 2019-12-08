import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from '././DialogsItem/DialogsItem'
import Message from '././Message/Message'
import { reduxForm, Field } from 'redux-form'
import {required,maxLengthCreator} from '../../utils/validators/validators'
import {Textarea} from '../Common/FormControls/FormControls'

const maxLength50=maxLengthCreator(50)

const Dialogs = (props) => {

    let state = props.dialogPage;

    let messageElement = state.messages.map(mess => <Message message={mess.message} id={mess.id} />);
    let dialogElement = state.dialogs.map(dialog => < DialogItem name={dialog.name} id={dialog.id} />);

    let addNewMessage = (values) => {
        props.addMess(values.newMessageText)
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogElement}
                </div>
                <div className={s.messages}>{messageElement}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> 
            < Field component={Textarea} name="newMessageText" placeholder="enter your message" validate={[required, maxLength50]}/>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
export default Dialogs;