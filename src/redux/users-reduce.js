const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET_USERS'; 
const SET_USER_TOTAL_COUNT='SET_USER_TOTAL_COUNT'

let initialState={
  
     users:[],
     pageSize:5,
     totalUserCount:0,
     currentPage:1
   
  }


const usersReduser = (state=initialState, action) => {
  switch(action.type){
    case FOLLOW: 
      return{
        ...state,
        users: state.users.map(u=> {
          if (u.id === action.userId){
            return{...u,  followed: true}
          }
          return u;
        })
      }
    
    case UNFOLLOW:
      return{
        ...state,
        users: state.users.map(u =>{
          if (u.id === action.userId){
            return{...u,followed: false}
          }
          return u;
        })
      }
    case SET_USERS:
      return{
        ...state,
        users:[...state.users,...action.users]
      }
     case SET_USER_TOTAL_COUNT:
       return{
         ...state,
        totalUserCount:[...state.totalUserCount,...action.totalUserCount]
       }
    default: 
            return state;
  }
} 

export const followAC= (userId) => ({type:FOLLOW,userId});
export const unfollowAC= (userId) =>({type:UNFOLLOW, userId});
export const setUserAC=(users)=>({type:SET_USERS, users});
export const setUserTotalCountAC=(totalUserCount)=>({type:SET_USER_TOTAL_COUNT, totalUserCount});





  export default usersReduser;
