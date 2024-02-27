import { useEffect, useState } from "react";
import AxiosInstance from "../config/AxiosInstance";

export const GetAllPetCat = () => {
  const [petCats, setPetCats] = useState([]);

  useEffect(() => {
    try {
      AxiosInstance.get('/users/GetAllPetCat')
        .then((res) => {
          debugger;
          setPetCats(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return petCats;
};
