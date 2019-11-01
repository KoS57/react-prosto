import React from 'react'
import styles from './users.module.css'

let Users = (props) => {
    if (props.user.length === 0){
    props.setUsers( [
        { id: 1,fotoUrl:'https://fs.kinomania.ru/file/news/8/33/833ef297b93415a147f518416e96a736.jpeg', followed:true, fullname:'Dmitry',status:'I am a boss',location:{countru:'Belarus',city:'Minsk'} },
        { id: 2,fotoUrl:'https://fs.kinomania.ru/file/news/8/33/833ef297b93415a147f518416e96a736.jpeg', followed:false, fullname:'Vasia',status:'I am a boss',location:{countru:'Ukraine',city:'Kiev'} },
        { id: 3,fotoUrl:'https://fs.kinomania.ru/file/news/8/33/833ef297b93415a147f518416e96a736.jpeg', followed:true, fullname:'Sacha',status:'I am a boss',location:{countru:'Ukraine',city:'Lviv'} }
        
    ])
}
    return <div>
        {
            props.user.map (u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.fotoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed 
                            ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.countru}</div>
                    </span>
                </span>
                </div>)
                }
</div>

        }

        export default Users;