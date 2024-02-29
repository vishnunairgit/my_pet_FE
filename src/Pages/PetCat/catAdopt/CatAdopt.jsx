import React, { useEffect, useState } from 'react'
import CatAdoptCard from '../catAdoptPage/CatAdoptCard'
import './catAdopt.css'
import CatAPI from '../../../API/PetAPI';

function CatAdopt() {

  const { allPetCat } = CatAPI.useFetchAllPetCat();


  // const [AllPetCat, setAllPetCat] = useState([])

  // useEffect(() => {
  //   fetchAllPetCat();
  // },[]);

  // const fetchAllPetCat = ()=>{
  //   AxiosInstance.get('users/GetAllPetCat', {params:{petType:'CAT'} })
  //   .then((response)=>{
  //     debugger
  //     setAllPetCat(response.data)
  //     console.log(response.data,'----------response.data-----');
  //   })
  //   .catch((err)=>{
  //     debugger
  //     console.error(err);

  //     if (err.response.data.message === 'unauthorized user') {
  //       localStorage.clear();
  //       // navigate('/')
  //     }
  //   });
  // }




  // const fetchAllPetCat = async () => {
  //   try {
  //     const response= await AxiosInstance.get('/users/GetAllPetCat', { params: { petType: 'CAT' } })
  //     debugger
  //     setAllPetCat(response.data);
  //     console.log(setAllPetCat,'------------------setAllPetCat--------------');
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //   }
  // };

  return (
    <>
    <div className='catAdoption row '>

    {allPetCat.map((petCat) => (<CatAdoptCard  allcatData = {petCat} />))}

      {/* {AllPetCat.map((petCat) => (<  CatAdoptCard key={petCat._id} allcatData={petCat} /> ))} */}

    </div>
    </>
    
  )
}

export default CatAdopt