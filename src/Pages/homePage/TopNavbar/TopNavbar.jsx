import React from 'react'
import userLogo from '../Asset/icons8-user-48.png'
import './topnav.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function TopNavbar() {

  const {userDetails}=useSelector((state)=>state.user)

  const navigate =useNavigate()


  const handleNavigateHome = ()=>{
    navigate('/dog')
  }
  const handleAddPet =()=>{
    navigate('/addpet')
  }
  const handlemybooking = ()=>{
    navigate('/mybooking')
  }
  const handleAddGrooming = ()=>{
    navigate('/petGrooming')
  }
   const handlelogout = () =>{
    localStorage.clear()
    navigate('/')
   }
  

  return (
    <div className='topnav'>
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <div className="navbar-brand"  onClick={handleNavigateHome}>Home</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

       { userDetails.role === 1 &&  <li className="nav-item">
          <div className="nav-link active" aria-current="page" onClick={handleAddPet}>Add pet</div>
        </li>}

        { userDetails.role === 1 && 
        <li className="nav-item">
         <div className="nav-link active" aria-current="page" onClick={handleAddGrooming}>Add Grooming</div>

          
        </li>
        
        }

        <li className="nav-item">
          <div className="nav-link" onClick={handlemybooking}>My Booking</div>
        </li>
        
      </ul>
      <div className='rightsidetopnav'>


      <li class="nav-item dropdown d-flux">
          <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={userLogo} alt="" />
          </span>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><span className="dropdown-item" >Name:{userDetails.firstName}{userDetails.lastName}</span></li>
            <li><span className="dropdown-item" >user: {userDetails.role === 1 ? 'Admin' : 'User'}</span></li>

            <div className='text-center'><button className="btn btn-primary " onClick={handlelogout}>Log Out</button></div>
          </ul>
        </li>

      </div>
      

    </div>
  </div>
</nav>

    </div>
  )
}

export default TopNavbar

