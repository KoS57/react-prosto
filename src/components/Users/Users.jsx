import React from 'react'
import styles from './users.module.css'
import *as axios from 'axios'
import userPhoto from '../../images/user.png'

class Users extends React.Component {
    componentDidMount() {
       
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount)
    });
    }   
    onPAgeChange=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)});
            } 
    
        render(){ 
            let pageCount=Math.ceil(this.props.totalUserCount/ this.props.pageSize);
            let page=[];
            for (let i=1; i<=pageCount;i++){
                page.push(i);
            }
    return <div>
        <div>
            {page.map(p=>{
               return <span className={this.props.currentPage === p && styles.selectPage}
               onClick={()=>{this.onPAgeChange(p); }}>{p}</span>
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
    }

    export default Users;