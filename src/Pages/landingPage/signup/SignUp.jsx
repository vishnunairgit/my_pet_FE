import React, { useEffect , useState } from "react";
import "./signUp.css";
import axios from "axios";
import { BASE_URL } from "../../../constants/BaseUrl";
import { toastError, toastSucces } from "../../../constants/plugines";
// import { Alert } from "bootstrap";

function SignUp({ setloginsignup }) {


 
  // signUp dettails
const [signUpData, setsignUpData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: "",
})

  // if already a member,  moving to login
const handleSignUp = () => {
  setloginsignup("Login");
};

 

// we can check the onchange is working or not
    // useEffect(()=>{
    // console.log(signUpData);
    // },[signUpData])


const handieUserSignUp=()=>{
  // form (name. email. password.. etc ) validation
  if (signUpData.firstName.length < 4 ) {
    alert('Please enter a first name with at least 4 characters.');
    return;
  }

  if (signUpData.lastName.length === 0) {
    alert('Please enter a last name.');
    return;
  }

  if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      signUpData.email
    )
  ) {
    alert('Please enter a valid email address.');
    return;
  }

  if (signUpData.password.length < 5) {
    alert('Password must contain at least 5 characters.');
    return;
  }

  if (signUpData.password !== signUpData.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  try{
    // debugger
    axios.post(`${BASE_URL}/auth/signUp`,signUpData).then((res)=>{
      // debugger
      console.log(res);
      if(res.data.message==='signUp successful'){
        toastSucces('Login successful')

        // toastSucces('signUp successfull')
        // alert('signUp successfull')
      setloginsignup('Login')
      }
     if(res.data.message==='email is already exist') {
      // debugger
      toastError('Email is already in use')
        // alert('Email is already in use')
      }     
    })
    
  } catch (error) {
    console.log(error);
  } 
}

  return (
    <>
      <div style={{ border: "1px solid #ccc" }} className="signUp">
        <div className="container">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account.</p>
          {/* <form onSubmit={handleSignUp}> */}
            <div className="namefullname">

              <div className="input-group">
                <label htmlFor="firstName">
                  <b>First Name</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="First Name"
                  name="name"
                  required
                  // pattern="[A-Za-z]+"
                  // minLength="4"
                  // title="Please enter only alphabetic characters with"
                  value={signUpData.firstName}
                  onChange={(e)=>{setsignUpData({...signUpData, firstName:e.target.value})}}
                  
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  placeholder="lastName"
                  // pattern="[A-Za-z]+"
                  // title="Please enter only alphabetic characters"
                  name="lastName"
                  value={signUpData.lastName}
                  onChange={(e)=>{setsignUpData({...signUpData,lastName:e.target.value})}}
                  required
                />
              </div>
            </div>

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              // title="Please enter a valid email address"
              name="email"
              value={signUpData.email}
              onChange={(e)=>{setsignUpData({...signUpData,email:e.target.value})}}
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              // minLength="8"
              // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              // title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
              value={signUpData.password}
              onChange={(e)=>{setsignUpData({...signUpData, password:e.target.value})}}
              required
            />

            <label htmlFor="confirm Password">
              <b>confirm Password</b>
            </label>
            <input
              type="password"
              name="confirm Password"
              placeholder="confirm Password"
              value={signUpData.confirmPassword}
              onChange={(e)=>{setsignUpData({...signUpData, confirmPassword:e.target.value})}}
              required
            />

            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                style={{ marginBottom: "15px" }}
              />{" "}
              Remember me
            </label>

            <p>
              By creating an account, you agree to our{" "}
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </a>
            </p>

            <div className="clearfix">
              {/* <button type="button" className="cancelbtn">Cancel</button> */}
              <button type="button" className="signupbtn"
              onClick={handieUserSignUp}
              >
                Sign Up
              </button>
            </div>
          {/* </form> */}
          <div>
            <div>
              <span>
                Have an account?{" "}
                <span
                // both onClik are correct. once we clik the function that time only we need call the function 
                // onClick={handilSignUp}
                  onClick={() => handleSignUp()}
                  style={{ color: "blue", fontWeight: "600" }}>
                  Log in
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
