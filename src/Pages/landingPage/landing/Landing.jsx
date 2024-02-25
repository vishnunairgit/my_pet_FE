import React, { useState } from 'react'
import landingIMG from "../Assets/wp2446973.jpg"
import "./landing.css"
import Login from '../login/Login'
import SignUp from '../signup/SignUp'

function Landing() {
  const [loginsignup, setloginsignup] = useState('Login')

  return (
       <>
       <div className={`landingPage ${loginsignup === 'SignUp' ? 'signupStyle' : ''}`} style={{ backgroundImage: `url(${landingIMG})` }}>
       <div className={'landingPage' } style={{ backgroundImage: `url(${landingIMG})` }}>

        <div className="main">

          <div className="leftside">
           {/* the line will help to set css. if login signup is there it will work differnt css */}
            <div className={`text-pet ${loginsignup === 'SignUp' ? 'SignUp-pet-words' : ''}`}>

            <div className='text-pet'>
              <p>
              If you don't own a dog, at least one, 
              there may not necessarily be anything wrong with you, 
              but there may be something wrong with your life.
              </p>
            </div>
            </div>
            
          </div>

          <div className="rightside">
            {loginsignup ==='Login' &&   <Login setloginsignup={setloginsignup} />}
            {loginsignup ==='SignUp' &&  <SignUp setloginsignup={setloginsignup} />}
            
          </div>

        </div>
      </div>
      </div>
    </>


  )
}

export default Landing