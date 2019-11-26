import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../images/user.png";
import { NavLink } from "react-router-dom";

const Users = props => {
  let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }
  return (
    <div>
      <div className={styles.page}>
        {page.map(p => {
          return (
            <span
              className={props.currentPage === p && styles.selectPage}
              onClick={() => {
                props.onPAgeChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.user.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span> 
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.countru"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
