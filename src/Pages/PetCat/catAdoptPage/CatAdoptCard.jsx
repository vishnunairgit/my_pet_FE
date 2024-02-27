import React, { useEffect } from 'react'
import './catAdoptcard.css'
import { GetAllPetCat } from '../../../API/PetAPI';

function CatAdoptCard() {

  const allPetcat = GetAllPetCat();

  

  console.log(allPetcat);



  return (
    
    <div className="catcards">

        <div className= "card" >

      {/* <div className={`card  ${propspetDogData?.petAdoptedBy? 'bg-warning':' '} `} > */}
        <div className="row g-0 ">
          <div className="col-md-4">
            <img
            //   src={`${BASE_URL}/petFiles/${propspetDogData.petThumbUpload}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>

          <div className="col-md-8 ">
            <div className="card-body" 
            // onClick={petdogViewPage}
            >

              <h5 className="card-title">Name :
               {/* {propspetDogData?.petName} */}
               </h5>
                <div className="pet-info">
                  <div className="info-item">
                    <strong className="label">Name :</strong>
                    <span className="value">
                        {/* {propspetDogData?.petName} */}
                        </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">PetType :</strong>
                    <span className="value">
                        {/* {propspetDogData?.petType} */}
                        </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">Breed :</strong>
                    <span className="value">
                        {/* {propspetDogData?.petBreeds} */}
                        </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">Gender :</strong>
                    <span className="value">
                        {/* {propspetDogData?.petGender} */}
                        </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">PetColour :</strong>
                    <span className="value">
                        {/* {propspetDogData?.petColour} */}
                        </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">DOB :</strong>
                    <span className="value">
                        {/* {propspetDogData?.petDateofbirth ? new Date(propspetDogData.petDateofbirth).toLocaleDateString('en-GB'):"no date selected" } */}
                        </span>
                  </div>

                </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default CatAdoptCard