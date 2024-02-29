import React, { useState } from 'react'
import CatAdoptCard from '../catAdoptPage/CatAdoptCard'
import './catAdopt.css'
import AxiosInstance from '../../../config/AxiosInstance'

function CatAdopt() {

  const [AllPetCat, setAllPetCat] = useState([ ])

  useEffect(() => {

    fetchAllPetCat();

  },[])

  const fetchAllPetCat = ()=>{
    AxiosInstance.get('users/getAllDogPetsData', {params:{petType:'CAT'} })
    .then((response)=>{
      debugger
      setAllPetCat(response.data)
      console.log(response.data,'----------response.data-----');
    })
    .catch((err)=>{
      debugger
      if (err.response.data.message === 'unauthorized user') {
        localStorage.clear();
        navigate('/')
      }
console.log(err);
    })
  }

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

      {AllPetCat.map((petCat) => (<  CatAdoptCard key={petCat._id} allcatData={petCat} /> ))}

    </div>
    </>
    
  )
}

export default CatAdopt