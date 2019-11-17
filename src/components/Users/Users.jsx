import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../images/user.png'
import { NavLink } from 'react-router-dom'
import *as axios from 'axios'

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let page = [];
    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }
    return <div>
        <div className={styles.page}>
            {page.map(p => {
                return <span className={props.currentPage === p && styles.selectPage}
                    onClick={() => { props.onPAgeChange(p); }}>{p}</span>
            })}
        </div> 

        {
            props.user.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "1474af24-1eca-4f89-82d1-e9866a25514c"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });
                            }}>
                                Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.countru'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;