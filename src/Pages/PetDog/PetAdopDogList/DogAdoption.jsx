import React, { useEffect } from 'react'
import AxiosInstance from '../../../config/AxiosInstance'

function DogAdoption() {

    useEffect(()=>{
        getAllPetsData()

    },[])

    const getAllPetsData =() =>{
        AxiosInstance.get('/user/getAllPetsData').then((Response)=>{

        })
        .catch((Error)=>{
            
        })


    }

  return (
    <div>



 doggggggggggggggggggggggggg
fefejkfjefkefeklflkdcd




    </div>
  )
}

export default DogAdoption