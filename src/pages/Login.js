import React from 'react'
import Template from '../components/Forms/Template'
// import loginImg from "../assets/login.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      // image={loginImg}
      text="A learning platform is an online space that facilitates the acquisition of knowledge and skills through interactive courses, resources, and assessments."
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
