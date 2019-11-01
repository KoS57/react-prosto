import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC,unfollowAC,setUserAC} from '../../redux/users-reduce'


let mapStateToProps = (state)=>{
    return{
        user: state.usersPage.users
    }
}
let mapDispatchToProps= (dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },  
        setUsers:(users)=>{
            dispatch(setUserAC(users));
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Users);