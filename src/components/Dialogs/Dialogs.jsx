import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from '././DialogsItem/DialogsItem'
import Message from '././Message/Message'



const Dialogs = (props) => { 

    let state=props.dialogPage;

    let messageElement = state.messages.map(mess => <Message message={mess.message} id={mess.id} />);
    let dialogElement = state.dialogs.map(dialog => < DialogItem name={dialog.name} id={dialog.id} />);
    let newMessageText=state.newMessageText;

    let newPostWord = React.createRef();
    let addMess = () => {
       props.addMess(); 
    }
let onMessChange=()=>{
    let text=newPostWord.current.value;
    props.onMessChange(text);
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
      value={newMessageText} ></textarea>
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