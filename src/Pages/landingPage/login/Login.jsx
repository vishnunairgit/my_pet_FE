
import React, { useState } from 'react'
import "./login.css"
import axios from 'axios'
import { BASE_URL } from '../../../constants/BaseUrl'
import { useNavigate } from 'react-router-dom'
import { toastError, toastSucces } from '../../../constants/plugines'
import { useDispatch, useSelector } from 'react-redux'
import { setuserDetails } from '../../../ToolKit/userSlice'
import pwd from "../../assets/assetprovider";




function Login({ setloginsignup }) {

  const { userDetails } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });


// ---------------------pwd show/hide function---------------------

  // const [showPassword, setShowPassword] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const shouldShowImg = loginData.password.length > 0;

// ----------------------------------------------------------------


  const handleLogin = () => {
    setloginsignup('SignUp')
  }

  const handleUserLogin = () => {
    try {
      if (loginData.email && loginData.password) {
        //  axios.post(`${BASE_URL}/auth/signUp`,{email:loginData.email, password:loginData.password}).then((res)=>{
        axios.post(`${BASE_URL}/auth/Login`, loginData).then((res) => {
          console.log(res);
          if (res.data.message === "Login successful" && res.data.token) {
            // storing the tocken to local storage
            localStorage.setItem('token', res.data.token)

            const parsedToken = parseJwt(res.data.token)

            dispatch(setuserDetails(parsedToken))

            console.log(parsedToken, '----lllll-----');


// -----------------if we pass the user details in the token.then follow this command--------------

            // localStorage.setItem('user', JSON.stringify(res.data.user) )
            // console.log(res.data.user);

// -------------------// once we convert the user details from jwt token---------------------
            localStorage.setItem('user', JSON.stringify(parsedToken))
            console.log(parsedToken);
            navigate('/dog')
            toastSucces('Login successful')

          }
          if (res.data.message === "Invalid user credentials") {
            toastError('Invalid user credentials')
            // alert('Invalid user credentials')
          }
          if (res.data.message === 'Internal server error') {
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
//---------decoding the user details and storing on the local storage---------------------- 
  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
// ------------------------------------------------------------------------------------------



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
            onChange={(e) => { setloginData({ ...loginData, email: e.target.value }) }} 
            />


          <label htmlFor="psw"><b>Password</b></label>

          <div className='password-container' > 
          
              <input 
                  // type={showPassword ? 'text' : 'password'}
                type={ showPwd ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                required
                value={loginData.password}
                onChange={(e) => { setloginData({ ...loginData, password: e.target.value }) }}
              />
              {shouldShowImg &&
                <img 
                src={showPwd ? pwd.hidepwd :pwd.showpwd } 
                alt={showPwd ? "pwd.hidepwd" :"pwd.showpwd" } 
                className='pwd-img'
                onClick={()=> setShowPwd(!showPwd)}
                />}

                  {/* <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                  </button> */}

          </div>
          
          {/* </div> */}

       



          <div className="clearfix">
            {/* <button type="button" className="cancelbtn">Cancel</button> */}
            <button type="submit"
              className="signupbtn"
              onClick={handleUserLogin}
            >Log In</button>
          </div>

          <div>
            <div>
              <span>Don't have an account? <span onClick={() => handleLogin()} style={{ color: 'blue', fontWeight: '600' }}>Sign up</span> </span>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Login