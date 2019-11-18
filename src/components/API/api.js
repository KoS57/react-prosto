import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
  }
});

export const userApi = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  unfollowUsers:(id)=>{
return instance
.delete (`follow/${id}`)
.then(response =>{
    return response.data;
})
  },
  followUsers:(id)=>{
    return instance
    .post (`follow/${id}`)
    .then(response =>{
        return response.data;
    })
      }
};
