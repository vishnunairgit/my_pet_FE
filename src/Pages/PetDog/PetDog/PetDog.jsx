import React, { useEffect, useState } from "react";
import PetCard from "../Cards/PetCard";
import "./petDog.css";
import PetCarousel from "../petcarosal/PetCarousel";

function PetDog() {
  return (
    <div className="petDogmain" style={{ backgroundColor: "#8a7878" }}>
      <div>
        <PetCarousel />
      </div>
      <div className="petdogcard">
        <PetCard />
      </div>
    </div>
  );
}

export default PetDog;
