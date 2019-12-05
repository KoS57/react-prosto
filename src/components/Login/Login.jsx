import React from 'react'
import {reduxForm, Field}from 'redux-form'

const Login = (props) => {
    return <div>
        <h1>Login</h1> 
        <LoginRedaxForm onSubmit={onSubmit}/>
    </div>
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'name'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'} component={'input'} />remember me
      </div>
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

  const onSubmit=(formData)=>{
      console.log(formData) 
  }
export default Login;