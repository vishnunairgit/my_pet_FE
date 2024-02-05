
import React from "react";
import "./dogCard.css";
// import petimage from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
import { BASE_URL } from "../../../constants/BaseUrl";
import { useNavigate } from "react-router-dom";

function Dogcards({ propspetDogData }) {

const navigate =useNavigate()

const petdogViewPage = ()=>{
  if (!propspetDogData.petAdoptedBy) {
    navigate(`/SinglePetViewPage/${propspetDogData._id}`)
  }
  else{
    alert('Pet already adopted')
    console.log("Pet already adopted, cannot view details");

  }
}

  return (
    <div className="Dogcards">
      <div className={`card  ${propspetDogData?.petAdoptedBy? 'bg-warning':' '} `} >
        <div className="row g-0 ">
          <div className="col-md-4">
            <img
              src={`${BASE_URL}/petFiles/${propspetDogData.petThumbUpload}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>

          <div className="col-md-8 ">
            <div className="card-body" onClick={petdogViewPage}>

            {/* <div className="card-body" onClick={()=>navigate(`/petViewPage/${propspetDogData._id}`)}> */}
              <h5 className="card-title">Name : {propspetDogData?.petName}</h5>
                <div className="pet-info">
                  <div className="info-item">
                    <strong className="label">Name :</strong>
                    <span className="value">{propspetDogData?.petName}</span>
                  </div>
                  <div className="info-item">
                    <strong className="label">PetType :</strong>
                    <span className="value">{propspetDogData?.petType}</span>
                  </div>
                  <div className="info-item">
                    <strong className="label">Breed :</strong>
                    <span className="value">{propspetDogData?.petBreeds}</span>
                  </div>
                  <div className="info-item">
                    <strong className="label">Gender :</strong>
                    <span className="value">{propspetDogData?.petGender}</span>
                  </div>
                  <div className="info-item">
                    <strong className="label">PetColour :</strong>
                    <span className="value">{propspetDogData?.petColour}</span>
                  </div>
                  <div className="info-item">
                    <strong className="label">DOB :</strong>
                    <span className="value">{propspetDogData?.petDateofbirth ? new Date(propspetDogData.petDateofbirth).toLocaleDateString('en-GB'):"no date selected" }</span>
                  </div>
                  {/*: {singlePetData?.petDateofbirth? new Date(singlePetData.petDateofbirth).toLocaleDateString("en-GB"):"no date selected"}
 */}
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogcards;
