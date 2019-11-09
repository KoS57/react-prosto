import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUserAC, setCurrentPageAC, setUsersTotalCountAC,setIsFetchingAC } from '../../redux/users-reduce'


let mapStateToProps = (state) => {
    return {
        user: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setUsersTotalCount:(totalUsersCount)=>{
            dispatch(setUsersTotalCountAC(totalUsersCount));
        },
        setIsFetching:(isFetching)=>{
            dispatch(setIsFetchingAC(isFetching));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);