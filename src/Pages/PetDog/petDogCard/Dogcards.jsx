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
import petimage from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
import { BASE_URL } from "../../../constants/BaseUrl";

function Dogcards({ propspetDogData }) {
  return (
    <div className="Dogcards">
      <div className="card mb-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${BASE_URL}/petFiles/${propspetDogData.petThumbUpload}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
             <h5 className="card-title">Name : {propspetDogData?.petName}</h5>
              <div className="row">
                <div className="col-md-6 leftsidecol-md-6">
                  <h6 className="card-title">Breed :</h6>
                  <h6 className="card-title">Gender :</h6>
                  <h6 className="card-title">Colour:</h6>
                  <h6 className="card-title">DOB:</h6>
                  <h6 className="card-title">Price:</h6>
                </div>
                <div className="col-md-6 rightsidecol-md-6">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {propspetDogData?.petBreeds}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {propspetDogData?.petGender}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {propspetDogData?.petColour}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {propspetDogData?.petDateofbirth}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {propspetDogData?.petPrice}
                  </h6>
                </div>
              </div>

              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogcards;
