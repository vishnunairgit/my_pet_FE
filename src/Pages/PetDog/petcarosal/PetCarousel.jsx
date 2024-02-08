
import React, { useEffect, useState } from 'react';
import './petcarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BASE_URL } from '../../../constants/BaseUrl';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AxiosInstance from '../../../config/AxiosInstance';

function PetCarousel() {

  const [petCarousaldata, setpetCarousaldata] = useState({ })
  // 
  useEffect(() => {
    getAllDogPetsData();
  }, []);

  const getAllDogPetsData= () => {
    AxiosInstance.get("/users/getAllDogPetsData")
      .then((response) => {
        // debugger;
        setpetCarousaldata(response.data);
        // dispatch(setpetDetails(response.data));
        
        // console.log(setpetCarousaldata,'------setpetCarousaldata-----');
      })
      .catch((err) => {
        debugger
        if (err.response.data.message === 'unauthorized user') {
          debugger
          localStorage.clear();
          navigate('/')
        }
        console.log(err);
      });
  };
  // 
            // fetching data from redux
            // const { petDetails } = useSelector((state) => state.pets);
            // console.log(petDetails, '-----------');

  const navigate = useNavigate();

            // const petnavigate = (petId) => {
            //   navigate(`/SinglePetViewPage/${petId}`);
            // };

  const petnavigate= ()=>{
    navigate('/dogAdoption')
  }



  return (
    <Carousel autoPlay infiniteLoop className='custom-carousel'>
      {petCarousaldata && petCarousaldata.length > 0 ? (
        petCarousaldata.map((pet, index) => (
          <div key={pet._id} onClick={() => petnavigate(pet._id)} className="carousel-item-container">
            <img
              src={`${BASE_URL}/petFiles/${pet.petThumbUpload}`}
              className='PetCarouselimg'
              alt={`Slide ${index + 1}`}
            />
            <p className="legend">{pet.petName}</p>
          </div>
        ))
      ) : (
        <div>No pet details available</div>
      )}
    </Carousel>
  );
}

export default PetCarousel;
