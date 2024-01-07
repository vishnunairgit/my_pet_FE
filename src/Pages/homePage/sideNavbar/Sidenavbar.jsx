import React from "react";
import "./sidenav.css";
import { useNavigate } from "react-router-dom";

function Sidenavbar() {
  const navigate = useNavigate();

  const handlePetDog = () => {
    navigate('/dog');
  };
  const handlePetCat = () => {
    navigate('/cats');
  };
  const handlePetBirds =()=>{
    navigate('/birds')
  }
  const handlePetFish =()=>{
    navigate('/fish')
  }
  const handleOtherPets =()=>{
    navigate('/otherPets')
  }
  const handlePetsAccessories =()=>{
  navigate('/accessories')
 } 
  return (
    <div className="sidenav">
      <div className="sidenavitems">
        <button className="btn btn-primary" onClick={handlePetDog}>
          Dogs
        </button>
      </div>
      <div className="sidenavitems ">
        <button className="btn btn-primary" onClick={handlePetCat}>
          Cats
        </button>
      </div>
      <div className="sidenavitems">
        <button className="btn btn-primary" onClick={handlePetBirds}>Birds</button>
      </div>
      <div className="sidenavitems">
        <button className="btn btn-primary" onClick={handlePetFish}>Fish</button>
      </div>
      <div className="sidenavitems">
        <button className="btn btn-primary" onClick={handleOtherPets}>Other Pets</button>
      </div>
      <div className="sidenavitems">
        <button className="btn btn-primary" onClick={handlePetsAccessories}>Accessories </button>
      </div>
    </div>
  );
}
export default Sidenavbar;