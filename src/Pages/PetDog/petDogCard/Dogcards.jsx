// import React from "react";
// import "./dogCard.css";
// import petimage from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
// import { BASE_URL } from "../../../constants/BaseUrl";

// function Dogcards({propspetDogData}) {
    
//   return (
//     <div className="Dogcards">
//       <div className="card mb-2">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src={`${BASE_URL}/petFiles/${propspetDogData.petThumbUpload}`} className="img-fluid rounded-start" alt='.......' />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body ">
//               <h5 className="card-title">Name : {propspetDogData?.petName}</h5>
//               <h6 class="card-subtitle mb-2 text-muted text-left ">Breed : {propspetDogData?.petBreeds}</h6>
//               <h6 class="card-subtitle mb-2 text-muted text-left   ">Gender : {propspetDogData?.petGender}</h6>
//               <h6 class="card-subtitle mb-2 text-muted text-left  ">Colour : {propspetDogData?.petColour}</h6>
//               <h6 class="card-subtitle mb-2 text-muted text-left  ">DOB : {propspetDogData?.petDateofbirth}</h6>
//               <h6 class="card-subtitle mb-2 text-muted text-left ">Price : {propspetDogData?.petPrice}</h6>
//               <p className="card-text">
//                 <small class="text-muted">Last updated 3 mins ago</small>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dogcards;



import React from "react";
import "./dogCard.css";
// import petimage from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
import { BASE_URL } from "../../../constants/BaseUrl";

function Dogcards({ propspetDogData }) {
  return (
    <div className="Dogcards">
      <div className="card">
        <div className="row g-0 ">
          <div className="col-md-4">
            <img
              src={`${BASE_URL}/petFiles/${propspetDogData.petThumbUpload}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>

          <div className="col-md-8 ">
            <div className="card-body">
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
                    <span className="value">{propspetDogData?.petDateofbirth}</span>
                  </div>
                  
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogcards;
