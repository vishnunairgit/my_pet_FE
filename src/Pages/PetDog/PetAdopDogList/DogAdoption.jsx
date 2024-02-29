import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../config/AxiosInstance";
import "../PetAdopDogList/DogAdoption.css";
import Dogcards from "../petDogCard/Dogcards";
import { useDispatch, useSelector } from "react-redux";
import { setpetDetails } from "../../../ToolKit/petSlice";
import { useNavigate } from "react-router-dom";

function DogAdoption() {

  const navigate=useNavigate();

  // ------------------redux -------------------------

  const { petDetails }=useSelector((state)=>state.pets)

  const dispatch=useDispatch()
  // -----------------//////////-------------------

  const [petDogData, setpetDogData] = useState([]);
console.log();
  
  useEffect(() => {
    fetchAllPetDog();
  },[]);

  const fetchAllPetDog = () => {
    AxiosInstance.get("/users/GetAllPetDog", {params:{petType:'DOG'}} )
      .then((response) => {
        // debugger;
        setpetDogData(response.data);

        dispatch(setpetDetails(response.data));
        
        console.log(response.data,'------response.data-----');
      })
      .catch((err) => {
        // debugger
        if (err.response.data.message === 'unauthorized user') {
          // debugger
          localStorage.clear();
          navigate('/')
        }
        console.log(err);
      });
  };

  return (
    <>
      <div className="DogAdoption row ">
        {petDogData.map((petDog) => (<  Dogcards propspetDogData={petDog} /> ))}
      </div>
    </>
  );
}

export default DogAdoption;

