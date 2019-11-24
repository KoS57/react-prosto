import React from 'react';
import { connect } from 'react-redux'
import Header from './Header'
import { getAuthSetUserData } from '../../redux/auth-reduce'

class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.getAuthSetUserData();
    };
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
 
});


export default connect(mapStateToProps, { getAuthSetUserData })(HeaderContainer);