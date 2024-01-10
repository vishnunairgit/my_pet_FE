
import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { BASE_URL } from '../../../constants/BaseUrl'
import { useNavigate } from 'react-router-dom'
import { toastError, toastSucces } from '../../../constants/plugines'




function Login({setloginsignup}) {

  const navigate=useNavigate()

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
          if (res.data.message==="Login successful" && res.data.token ){
            // storing the tocken to local storage
            localStorage.setItem('token', res.data.token)

           const  parsedToken = parseJwt(res.data.token)
           console.log(parsedToken,'----lllll-----');


          // if we pass the user dettails in the tocken.then follow this command
              // localStorage.setItem('user', JSON.stringify(res.data.user) )
              // console.log(res.data.user);
          // once we convert the user dettils from jwt tockn 
          localStorage.setItem('user', JSON.stringify(parsedToken) )
          console.log(parsedToken);
            navigate('/dog')
            toastSucces('Login successful')

          }
          if (res.data.message==="Invalid user credentials") {
            toastError('Invalid user credentials')
            // alert('Invalid user credentials')
          }
          if (res.data.message==='Internal server error') {
            alert('something went wrong')
          }
            // debugger
          })
      } 
    } catch (error) {
      alert('user credentials not filled')
      console.log(error);
    }

  }
// decoding user dettils and storing in the local storage
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
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
              <span>Don't have an account? <span onClick={() => handleLogin()} style={{color:'blue', fontWeight:'600'}}>Sign up</span> </span>
          </div>
       
        </div>
        </div>
      </div>


    </div>
  )
}

export default Login