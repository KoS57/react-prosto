import React from 'react'
import UsersContainerAPI from './UsersContainerAPI'
import {connect} from 'react-redux'
import {followAC,unfollowAC,setUserAC,setCurrentPageAC,setUsersTotalCountAC} from '../../redux/users-reduce'
import Users from './Users'
import *as axios from 'axios'


class UsersContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }
    onPAgeChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <Users 
            
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPAgeChange={this.onPAgeChange}
            user={this.props.user}
            unfollow={this.props.unfollow}
            follow={this.props.follow} />
    }
}
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

export default connect (mapStateToProps,mapDispatchToProps)(UsersContainer);