import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from '././DialogsItem/DialogsItem'
import Message from '././Message/Message'
import DialogsContainer from './DialogsContainer'


const Dialogs = (props) => { 
    let messageElement = props.messageData.map(mess => <Message message={mess.message} id={mess.id} />);
    let dialogElement = props.dialogData.map(dialog => < DialogItem name={dialog.name} id={dialog.id} />);
    let newPostWord = React.createRef();
    let addMess = () => {
       props.addMess();
    }
let onMessChange=()=>{
    let text=newPostWord.current.value;
    props.onMessChange();
  }

    
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogElement}
                </div>
                <div className={s.messages}>{messageElement}
                <div>
                <textarea ref={newPostWord} onChange={onMessChange} 
      value={props.newMessageText} ></textarea>
                <div>
                    <button onClick={addMess}>Add post</button>
                </div>
            </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Dialogs;