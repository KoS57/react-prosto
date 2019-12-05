import React from 'react'
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
 state={
     editModel:false,
     status:""
 }
 activateEditModel=()=>{
     this.setState({
         editModel:true,
         status: this.props.status
     })
     
    }
     deactivateEditModel=()=>{
        this.setState({
            editModel:false
        })
        this.props.updateStatus(this.state.status)
    }
        onStatusChange=(e)=>{
            this.setState({
                status:e.currentTarget.value
            })
        }
//     componentDidUpdate(prevProps,prevState){
        
//    if(prevProps.status !== this.props.status){
//        this.setState({
//            status:this.props.status
//        })
//    }
//         console.log("componentDidUpdate")
//     }
        render(){
            console.log("render")

            return(
<div>
    {!this.state.editModel &&
    <div>
            <span onDoubleClick={this.activateEditModel}>{this.props.status || "-----"}</span>
    </div>
        }
            {this.state.editModel &&
    <div>
        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditModel} value={this.state.status}/>
    </div>
        }
</div>
            )
        }
 }
    



export default ProfileStatus;