import React, { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

  
const Login = () => {
  const [formData,setFormData]= useState({
    email:'',
    passWord:'',
  })

const handleSubmit=async (e)=>{
   e.preventDefault();
   let res= await axios.post('http://localhost:4000/create',formData)
   console.log(res.data,'hehe')
   
}

  return (
    <div id='one'>
        
        <h2>LOGIN</h2>
        <div id='two'>
        <p>Doesn't have an account yet?
        <a href='signup.com'> SignUp</a></p>
        </div>
        <br></br>
        <input placeholder='enter email' type='email'></input>
        <br></br>
        <input placeholder='enter password' type='password'></input>
        <br></br>
        <label>
        <input type='checkbox' ></input>
        Remember me
        </label>
       {/* <input type='checkbox'>Remember me</input> */}
        <Link to={'/submit'}>
        <button  type='submit'>Login</button>
        </Link>
    </div>
  )
}

export default Login