import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom'
import { tsPropertySignature } from '@babel/types';

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://olympus.crumina.net/wp-content/uploads/2019/03/logo-colored-2x.png" />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'} > Login </NavLink>}

        </div>
    </header>


}

export default Header;