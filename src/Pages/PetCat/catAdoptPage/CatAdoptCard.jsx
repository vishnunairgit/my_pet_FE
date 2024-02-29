import React, { } from 'react'
import './catAdoptcard.css'
// import { GetAllPetCat } from '../../../API/PetAPI';

function CatAdoptCard({ allcatData }) {


  return (

    <div className="catcards">
      <div className="card" >
        <div className={`card  ${allcatData?.petAdoptedBy ? 'bg-warning' : ' '} `} >
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
                  {allcatData?.petName}
                </h5>
                <div className="pet-info">
                  <div className="info-item">
                    <strong className="label">Name :</strong>
                    <span className="value">
                      {allcatData?.petName}
                    </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">PetType :</strong>
                    <span className="value">
                      {allcatData?.petType}
                    </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">Breed :</strong>
                    <span className="value">
                      {allcatData?.petBreeds}
                    </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">Gender :</strong>
                    <span className="value">
                      {allcatData?.petGender}
                    </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">PetColour :</strong>
                    <span className="value">
                      {allcatData?.petColour}
                    </span>
                  </div>
                  <div className="info-item">
                    <strong className="label">DOB :</strong>
                    <span className="value">
                      {allcatData?.petDateofbirth ? new Date(allcatData.petDateofbirth).toLocaleDateString('en-GB'):"no date selected" }
                    </span>
                  </div>

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