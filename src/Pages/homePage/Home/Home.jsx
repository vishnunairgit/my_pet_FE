

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
import AddPet from '../../Add Pet/AddPet';
import DogAdoption from '../../PetDog/PetAdopDogList/DogAdoption';
import PetViewPage from '../../PetDog/petViewPage/PetViewPage';
import FIleViewPage from '../../PetDog/petViewPage/FileViewPage/FIleViewPage';
import MyBooking from '../../PetDog/mybooking/MyBooking';
import { UserAuth, AdminAuth } from '../../../Authorization/Authorization';
import EditPet from '../../Add Pet/editPet/EditPet';

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <div className="main-content">
        <Sidenavbar />
        <Routes>
          {/* Protected routes for regular users */}
          <Route element={<UserAuth/>}>
            <Route path="/" element={<PetDog />} />
            <Route path="/dog" element={<PetDog />} />
            <Route path="/dogAdoption" element={<DogAdoption/>} />
            <Route path="/SinglePetViewPage/:id" element={<PetViewPage/>} />
            <Route path="/fIleViewPage/:id" element={<FIleViewPage/>} />
            <Route path="/mybooking" element={<MyBooking/>} />
          </Route>

          {/* Protected routes for admin */}
          <Route element={<AdminAuth/>}>
            <Route path="/addpet" element={<AddPet/>} />
            <Route path="/editPet" element={<EditPet/>} />

          </Route>
{/* EditPet */}
          {/* Routes accessible to all users */}
          <Route path="/cats" element={<PetCat />} />
          <Route path="/birds" element={<PetBired />} />
          <Route path="/fish" element={<PetFish />} />
          <Route path="/otherPets" element={<OtherPets />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
