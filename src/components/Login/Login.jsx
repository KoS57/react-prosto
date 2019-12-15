import React from 'react'
import {reduxForm, Field}from 'redux-form'
import {connect} from 'react-redux'
import {login} from '../../redux/auth-reduce'
import {Redirect} from 'react-router-dom'
import  style  from '../Common/FormControls/FormControl.module.css'

const Login = (props) => {
    const onSubmit=(formData)=>{
        props.login( formData.email , formData.password , formData.rememberMe ,)
    }
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1> 
        <LoginRedaxForm onSubmit={onSubmit}/>
    </div>
}



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'} component={'input'} />remember me
      </div>
      {props.error && <div className={style.formSummaryError}>
{props.error}
      </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
 const LoginRedaxForm=reduxForm({ 
    // a unique name for the form
    form: 'login'
  })(LoginForm);

//   const onSubmit=(formData)=>{
//       console.log(formData) 
//   }

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})
export default connect( mapStateToProps, {login}) (Login);