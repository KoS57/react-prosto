import {getAuthSetUserData} from './auth-reduce'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
 initialized:false
}
 

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        ...action.initialized
      } 
    default:
      return state;
  }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const initializeApp=()=>(dispatch)=>{
    let promise=dispatch(getAuthSetUserData())
    Promise.all([promise])
    .then(()=>{
      dispatch(initializedSuccess())
    })
}



export default appReduser;
