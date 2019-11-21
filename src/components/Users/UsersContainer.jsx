import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  togglefollowingProgress,
  getUsers
} from "../../redux/users-reduce";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPAgeChange = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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
  return {
    user: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  togglefollowingProgress,
  getUsers
})(UsersContainer);
