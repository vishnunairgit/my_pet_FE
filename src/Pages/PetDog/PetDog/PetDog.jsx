import React from 'react'
import PetCard from '../Cards/PetCard'
import './petDog.css';
import PetCarousel from '../petcarosal/PetCarousel';


function PetDog() {
  return (
    <div style={{backgroundColor:"#8a7878"}}>
      <PetCarousel/>
      <PetCard/>
    </div>
  )
}

export default PetDog