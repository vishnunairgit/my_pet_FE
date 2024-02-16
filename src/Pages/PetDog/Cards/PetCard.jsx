import React from "react";
import dogAadoption from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
import dogGromming from "../Assets/Untitled-design-60-1024x576.jpg";
import dogWalking from "../Assets/walker-ser-lft.jpg";
import bookmydoctor from "../Assets/BookNowBarkAve.png";
import "./petCard.css";
import { useNavigate } from "react-router-dom";

function PetCard() {

const navigate =useNavigate()

const DogAdoption=()=>{
  navigate('/dogAdoption')
}
  
  return (
    <>
    <div className="petcard">

      <div className="petcard-1 ">

        <div className="card m-1 " >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={dogAadoption}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8" >
              <div className="card-body" onClick={DogAdoption}>
                <h5 className="card-title">Dog adoption</h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog...
                </p>
                {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="card m-1" >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={dogGromming}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Dog Grooming</h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog.
                </p>
                {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="petcard-1">

        <div className="card m-1">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={dogWalking}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Dog walker</h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog.
                </p>
                {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="card m-1" >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={bookmydoctor}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Book An Appointment dr </h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog.
                </p>
                {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
      
      
    </>
  );
}

export default PetCard;
