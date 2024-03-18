import React, { useEffect, useState } from 'react'
import DogGroomCard from '../dogGroomingcard/DogGroomCard'
import AxiosInstance from '../../../../config/AxiosInstance'
import './doggromming.css'

function DogGrooming() {
    const [groomdata, setgroomdata]= useState([ ])




useEffect(()=>{
    getgroomdata()
},[])

const getgroomdata = async ()=>{

    try {
        const response = await AxiosInstance.get('/users/Getgroomdata')
        debugger
        setgroomdata(response.data)

    } catch (error) {
        console.error("Error fetching groom data:", error);
        
    }
 
}


  return (
    <div className='getgroomdata'>

        {groomdata.map((groomdata)=>(< DogGroomCard  grooming={ groomdata } /> ))}


    
      
    </div>
  )
}

export default DogGrooming
