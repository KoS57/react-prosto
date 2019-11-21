import { userApi } from "../components/API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CURRENT_TOTAL_COUNT = "SET_CURRENT_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 100,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: []
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_CURRENT_TOTAL_COUNT:
      return {
        ...state,
        totalUserCount: action.count
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.followingProgress
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

export const followSuccess= userId => ({ type: FOLLOW, userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setUsersTotalCount = totalUsersCounter => ({
  type: SET_CURRENT_TOTAL_COUNT,
  count: totalUsersCounter
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const togglefollowingProgress = (followingProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingProgress,
  userId
});

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    userApi.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};

export const unfollow = (userId) => {
  return dispatch => {
    dispatch(togglefollowingProgress(true,userId));
    userApi.unfollowUsers(userId).then(data => {
              if (data.resultCode === 0) {
                  dispatch(unfollowSuccess(userId));
              }
              dispatch(togglefollowingProgress(false,userId));
          });
    };
  };

  export const follow = (userId) => {
    return dispatch => {
      dispatch(togglefollowingProgress(true,userId));
      userApi.followUsers(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(togglefollowingProgress(false,userId));
            });
      };
    };
export default usersReduser;
