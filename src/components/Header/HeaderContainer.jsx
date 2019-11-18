import React from 'react';
import *as axios from 'axios'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuthSetUserData } from '../../redux/auth-reduce'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    this.props.setAuthSetUserData(id, email, login)
                }
            });
    };
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});


export default connect(mapStateToProps, { setAuthSetUserData })(HeaderContainer);