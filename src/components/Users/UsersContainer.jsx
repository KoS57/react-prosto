import React from 'react'
import Users from './Users'
import {connect} from 'react-redux'
import {followAC,unfollowAC,setUserAC,setCurrentPageAC,setUsersTotalCountAC} from '../../redux/users-reduce'


let mapStateToProps = (state)=>{
    return{
        user: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount:(totalCount)=>{
            dispatch(setUsersTotalCountAC(totalCount))
    }
}
}

export default connect (mapStateToProps,mapDispatchToProps)(Users);