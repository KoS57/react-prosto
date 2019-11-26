import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
  }
});

export const userApi = {
  getUsers (currentPage = 1, pageSize = 10) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{withCredentials: true})
      .then(response => {
        return response.data;
      });
  }, 
  unfollowUsers (id)  {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{
      withCredentials: true,
      headers: {
        "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
      }
    }).then(response => {
      return response.data;
    });
  },
  followUsers (id){
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,{},{
      withCredentials: true,
      headers: {
        "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
      }
      }).then(response => {
      return response.data;
    });
  },
  getProfile (userId) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId,{withCredentials: true});
  }
 
};
export const  authAPI ={
  me() {return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true});}
  
}