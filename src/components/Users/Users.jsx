import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../images/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";

const Users = ({totalUserCount,pageSize,currentPage,onPAgeChange,...props}) => {
  return (
    <div><Paginator totalUserCount={totalUserCount} pageSize={pageSize}
    currentPage={currentPage} onPAgeChange={onPAgeChange}/>
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
