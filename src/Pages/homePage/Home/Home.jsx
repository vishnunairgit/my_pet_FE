

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavbar from '../TopNavbar/TopNavbar';
import Sidenavbar from '../sideNavbar/Sidenavbar';
import PetDog from '../../PetDog/PetDog/PetDog';
import './home.css'
import PetCat from '../../PetCat/PetCat';
import PetBired from '../../PetBired/PetBired';
import PetFish from '../../PetFish/PetFish';
import OtherPets from '../../OtherPet/OtherPets';
import Accessories from '../../Accessories/Accessories';
import AddPet from '../../Common/Add Pet/AddPet';

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <div className="main-content">
        <Sidenavbar />
        <Routes>
          <Route path="/" element={<PetDog />} />
          <Route path="/dog" element={<PetDog />} />
          <Route path="/cats" element={<PetCat />} />
          <Route path="/birds" element={<PetBired />} />
          <Route path="/fish" element={<PetFish />} />
          <Route path="/otherPets" element={<OtherPets />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/addpet" element={<AddPet/> }/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

export default Home;
