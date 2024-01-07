import React from 'react'
import PetCard from '../Cards/PetCard'
import './petDog.css';
import PetCarousel from '../petcarosal/PetCarousel';


function PetDog() {
  return (
    <div>
      <PetCarousel/>
      <PetCard/>
    </div>
  )
}

export default PetDog