import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./landingpage.css"
import petfoot from "../../assets/aaaa.jpg"
import adopt from "../../assets/360_F_226533348_TiIz0m2dU4dBXC6yFJrNOfXfh5YcEecY.jpg"
import walking from "../../PetDog/Assets/walker-ser-lft.jpg"
import grooming from "../../PetDog/Assets/Untitled-design-60-1024x576.jpg"
import petdr from "../../PetDog/Assets/BookNowBarkAve.png"
import AxiosInstance from '../../../config/AxiosInstance'


function Landdingpage() {

  const [alldata, setalldata] = useState('')

  const navigate = useNavigate()

  const handlelog = () => {
    navigate('/Landing')
  }

  // useEffect(() => {
  //   // Check if the user is authenticated (replace with your authentication logic)
  //   const isAuthenticated = /* Your authentication logic here */;
  
  //   if (isAuthenticated) {
  //     getAllDogPetsDatalandingpage();
  //   } else {
  //     // User is not authenticated, display some default data or handle it accordingly
  //     setalldata('Default Data or Message');
  //   }
  // }, []);
  
  // const getAllDogPetsDatalandingpage = () => {
  //   const authToken = 'token'; // Replace with your actual authentication token
  
  //   AxiosInstance.get('/users/getAllDogPetsDatalandingpage', {
  //     headers: {
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //   })
  //     .then((response) => {
  //       setalldata(response.data);
  //       console.log(setalldata);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };



  return (

    <div className='forndpagemain' >
      <div className='nav'>
        <div className='shopname'>
          <h1>Petiezzz</h1>
          <img src={petfoot} alt="" />
        </div>
        <div><h3>We are happy to serve you</h3></div>
        <div className='loginbutton'>
          <button type="button" className='btn btn-primary' onClick={handlelog}> LOGIN</button>
        </div>
      </div>
      <div className='frondpagecard'>
        <h2 className='heading'>OUR SERVICES</h2>

        <div className='forndpage'>
   
          <div className="card" style={{ width: '18rem' }}>
            <img src={adopt} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pet adoption</h5>
              <a href="#" className="btn btn-primary" onClick={handlelog}>BOOK NOW</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={walking} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pet Walking</h5>
              <a href="#" className="btn btn-primary" onClick={handlelog}>BOOK NOW</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={grooming} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pet Grooming</h5>
              <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={petdr} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pet Consultants</h5>
              <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>

        </div>

        {/* <div className='forndpage'>

          <div className="card" style={{ width: '18rem' }}>
            <img src={grooming} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pet Grooming</h5>
              <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src={petdr} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pet Consultants</h5>
              <a href="#" className="btn btn-primary">BOOK NOW</a>
            </div>
          </div>

        </div> */}
      </div>

      {/* 
      <div className='petwalk'>
        <div>
          <img src={adopt} alt="" />
        </div>
        <div>
        <div className='forndpage'>
          <div className="cardpetadopt" style={{ width: '13rem' }}>
            <img src={adopt} className="card-img-top" alt="..." />
            <div className="card-body">
              
              <a href="#" className="btn btn-primary" onClick={handlelog}>BOOK NOW</a>
            </div>
          </div>
          <div className="cardpetadopt" style={{ width: '13rem' }}>
            <img src={walking} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pet Walking</h5>
              <a href="#" className="btn btn-primary" onClick={handlelog}>BOOK NOW</a>
            </div>
          </div>
        </div>

         


        </div>

      </div> */}

      <div className='petwalk'>
        <div>
          <img src={walking} alt="" />
        </div>
        <div>
          <h2>Why choose dog walking service?</h2>
          <li>Daily walks keep your pet physically fit and active.</li>
          <li>Dog-walking exercise engages your pet's mind, preventing boredom.</li>
          <li>Daily walks encourage interaction with other pets..</li>
          <li>Keeps your pet's weight in check and increases its strength..</li>

          <button type="button" className='btn btn-primary m-2' onClick={handlelog}> BOOK NOW</button>

        </div>



      </div>

      <div className='petGrom'>
      
        <div>
        <h2>Why choose dog grooming service?</h2>
          <li>Hygiene and Health.</li>
          <li>Prevention of Health Issues.</li>
          <li>Comfort and Well-being.</li>
          <li>Socialization.</li>
          <li>Professional Expertise.</li>
          <li>Nail and Teeth Care.</li>
          <button type="button" className='btn btn-primary m-2' onClick={handlelog}> BOOK NOW</button>


        </div>
        <div>
          <img src={grooming} alt="" />

        </div>

      </div>


    </div>
  )
}

export default Landdingpage