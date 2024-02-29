


// 

import { useEffect, useState } from 'react';
import AxiosInstance from '../config/AxiosInstance';


// -----------------------------catAPI----------------------------
const CatAPI = {
  useFetchAllPetCat: () => {
    const [allPetCat, setAllPetCat] = useState([]);

    useEffect(() => {
      fetchAllPetCat();
    }, []);

    const fetchAllPetCat = () => {
      AxiosInstance.get('users/GetAllPetCat', { params: { petType: 'CAT' } })
        .then((response) => {
          debugger;
          setAllPetCat(response.data);
          console.log(response.data, '----------response.data-----');
        })
        .catch((err) => {
          debugger;
          console.error(err);

          if (err.response.data.message === 'unauthorized user') {
            localStorage.clear();
            // navigate('/')
          }
        });
    }

    return { allPetCat };
  },
};

export default CatAPI;

// -------------------------------------------------------------------------------------

// ----------------------------PetDog APi-----------------------------------------------


