import React from 'react'
import HeaderLogin from './HeaderLogin'
import Login from './Login'

const LoginPage = () => {
  return (
    <>
    <HeaderLogin
       heading="Login to your account"
       paragraph="Don't have an account yet? "
       linkName="Signup"
       linkUrl="/signup"
       />
         <Login/>
   
</>
  )
}

export default LoginPage