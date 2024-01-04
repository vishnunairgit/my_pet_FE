
import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { BASE_URL } from '../../../constants/BaseUrl'

function Login({setloginsignup}) {

  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  })

  const handleLogin =()=>{
    setloginsignup('SignUp')
  }

   const handleUserLogin =()=>{
    try {
      if(loginData.email && loginData.password){
        //  axios.post(`${BASE_URL}/auth/signUp`,{email:loginData.email, password:loginData.password}).then((res)=>{
          axios.post(`${BASE_URL}/auth/Login`,loginData).then((res)=>{
          console.log(res);
            debugger
          })
      } 
    } catch (error) {
      alert('user credentials not filled')
      console.log(error);
    }

   }



  return (
    <div>
      <div className='login' style={{ border: '1px solid #ccc' }}>
        <div className="container">
          <h1>Login</h1>
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" 
          placeholder="Enter Email" 
          name="email" 
          value={loginData.email} 
          required  
          onChange={(e)=>{setloginData({...loginData, email:e.target.value})}} />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" 
          placeholder="Enter Password" 
          name="password" 
          required 
          value={loginData.password}
          onChange={(e)=>{setloginData({...loginData, password:e.target.value})}}

          
          />

          <div className="clearfix">
            {/* <button type="button" className="cancelbtn">Cancel</button> */}
            <button type="submit" 
            className="signupbtn"
            onClick={handleUserLogin}
            >Log In</button>
          </div>
          <div>
            <div>
              <span>Don't have an account? <a onClick={() => handleLogin()} style={{color:'blue', fontWeight:'600'}}>Sign up</a> </span>
          </div>
       
        </div>
        </div>
      </div>


    </div>
  )
}

export default Login