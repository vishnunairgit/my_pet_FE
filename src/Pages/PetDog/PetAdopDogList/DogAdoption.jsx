import React, { useEffect, useState } from "react";
import AxiosInstance from "../../../config/AxiosInstance";
import "../PetAdopDogList/DogAdoption.css";
import Dogcards from "../petDogCard/Dogcards";


function DogAdoption() {
  const [petDogData, setpetDogData] = useState([])


  useEffect(() => {
    getAllDogPetsData();
  }, []);

  const getAllDogPetsData = () => {
    AxiosInstance.get("/users/getAllDogPetsData").then((response) => {
        debugger;
        setpetDogData(response.data)
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (

    <>
    <div className="DogAdoption row row-cols-1 row-cols-md-2 ">
    
          {petDogData.map((petDog)=>  <Dogcards propspetDogData={petDog} />)}
    
    </div>

    </>
  );
}

export default DogAdoption;


