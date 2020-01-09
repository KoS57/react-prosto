import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  togglefollowingProgress,
  reqesrUsers
} from "../../redux/users-reduce";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { getUsers, getPage, getTotalUserCount, getCurrentPage, getIsFetching, getFollowingProgress } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.reqesrUsers(this.props.currentPage, this.props.pageSize);
  }
  onPAgeChange = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.reqesrUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPAgeChange={this.onPAgeChange}
          user={this.props.user}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toggleIsFetchingProgress={this.props.toggleIsFetchingProgress}
          togglefollowingProgress={this.props.togglefollowingProgress}
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}
let mapStateToProps = state => {
  console.log('mapStateToProps USERS')
  return {
    user: getUsers(state),
    pageSize: getPage(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  togglefollowingProgress,
  reqesrUsers
})(UsersContainer);
