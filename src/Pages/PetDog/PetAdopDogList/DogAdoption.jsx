import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../config/AxiosInstance";
import "../PetAdopDogList/DogAdoption.css";
import Dogcards from "../petDogCard/Dogcards";
import { useDispatch, useSelector } from "react-redux";
import { setpetDetails } from "../../../ToolKit/petSlice";

function DogAdoption() {

  // ------------------redux -------------------------

  const { petDetails }=useSelector((state)=>state.pets)

  const dispatch=useDispatch()
  // -----------------//////////-------------------

  const [petDogData, setpetDogData] = useState([]);

  
  useEffect(() => {
    getAllDogPetsData();
  }, []);

  const getAllDogPetsData = () => {
    AxiosInstance.get("/users/getAllDogPetsData")
      .then((response) => {
        // debugger;
        setpetDogData(response.data);
        dispatch(setpetDetails(response.data));
        
        // console.log(response.data,'------response.data-----');
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <>
      <div className="DogAdoption row">
        {petDogData.map((petDog) => (<  Dogcards propspetDogData={petDog} /> ))}
      </div>
    </>
  );
}

export default DogAdoption;

