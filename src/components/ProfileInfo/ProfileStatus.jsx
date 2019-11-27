import React from 'react'
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
 state={
     editModel:false
 }
 activateEditModel=()=>{
     this.setState({
         editModel:true
     })
    }
     deactivateEditModel=()=>{
        this.setState({
            editModel:false
        })
    }
        render(){
            return(
<div>
    {!this.state.editModel &&
    <div>
            <span onDoubleClick={this.activateEditModel}>{this.props.status}</span>
    </div>
        }
            {this.state.editModel &&
    <div>
        <input autoFocus={true} onBlur={this.deactivateEditModel} value={this.props.status}/>
    </div>
        }
</div>
            )
        }
 }
    



export default ProfileStatus;