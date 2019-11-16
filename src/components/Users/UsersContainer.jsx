import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/users-reduce'
import Users from './Users'
import *as axios from 'axios'
import Preloader from '../Preloader/Preloader'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            { withCredentials: true })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }
    onPAgeChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            { withCredentials: true })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);

            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users

                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPAgeChange={this.onPAgeChange}
                user={this.props.user}
                unfollow={this.props.unfollow}
                follow={this.props.follow} />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        user: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching })(UsersContainer);