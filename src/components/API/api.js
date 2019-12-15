import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
  }
});

export const userApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
      .then(response => {
        return response.data;
      });
  },
  unfollowUsers(id) {
    return instance.delete(`follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
      }
    }).then(response => {
      return response.data;
    });
  },
  followUsers(id) {
    return instance.post(`follow/${id}`, {}, {
      withCredentials: true,
      headers: {
        "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
      } 
    }).then(response => {
      return response.data;
    });
  },
  getProfile(userId) {
    console.warn('Obsolete method.Please profileAPI object.')
    return profileAPI.getProfile(userId)
  }

};
export const authAPI = {
  me() { return instance.get(`auth/me`, { withCredentials: true }); },
  login(email,password,rememberMe=false){
    return instance.post(`auth/login`,{email,password,rememberMe})
  },
  logout(){
    return instance.delete(`auth/login`)
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId, { withCredentials: true });
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  }
};
