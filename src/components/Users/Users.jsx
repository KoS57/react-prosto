import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../images/user.png'


let Users = (props)=>{
            {
                let pageSize=Math.ceil(this.props.totalUsersCount / this.props.pageSize);
                let page=[];
                for (let i=1; i<=pageSize;i++){
                    page.push(i);
                }
            }
    return <div>
        <div>
           
        </div>
   <div className={styles.curSore}>
       {page.map(p=>{
       return <span  className={this.props.currentPage === p && styles.selectedPage} 
       onClick={()=>{this.onPageChange(p);}} >{p}</span> 
       })}
   </div>
            {
                this.props.user.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

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