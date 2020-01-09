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
  followingProgress: [],
  fake: 10
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case "FAKE": return { ...state, fake: state.fake + 1 }


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

export const followSuccess = userId => ({ type: FOLLOW, userId });
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

export const reqesrUsers = (currentPage, pageSize) => {
  return async (dispatch) => {

    dispatch(toggleIsFetching(true));
    let data = await userApi.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));

  };
};
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(togglefollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(togglefollowingProgress(false, userId));

};

export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = userApi.unfollowUsers.bind(userApi);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = userApi.followUsers.bind(userApi);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);

  };
};
export default usersReduser;
