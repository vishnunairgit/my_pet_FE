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
   const handlelogout =()=>{
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

        <li className="nav-item">
          <div className="nav-link" onClick={handlemybooking}>My Booking</div>
        </li>
        {/* <li className="nav-item">
          <div className="nav-link" href="#">Link</div>
        </li> */}
        {/* <li className="nav-item">
          <div className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</div>
        </li> */}
      </ul>
      <div className='rightsidetopnav'>

      {/* <form className="d-flex"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
        {/* <button className="btn btn-primary" type="submit">Search</button> */}
      {/* </form> */}

      <li class="nav-item dropdown d-flux">
          <span class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </span>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><span class="dropdown-item" >{userDetails.firstName}{userDetails.lastName}</span></li>
            <li><span class="dropdown-item" >user: {userDetails.role}</span></li>

            <li><button class="dropdown-item" onClick={handlelogout}>Log Out</button></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        

      
       {/* <div>{userDetails.firstName}{userDetails.lastName}</div>
      <img src={userLogo} alt="" />  */}
      
      </div>
      

    </div>
  </div>
</nav>

    </div>
  )
}

export default TopNavbar

// import React from 'react';

// function TopNavbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo02"
//             aria-controls="navbarTogglerDemo02"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Link
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link disabled"
//                   href="#"
//                   tabIndex="-1"
//                   aria-disabled="true"
//                 >
//                   Disabled
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default TopNavbar;
