import React from "react";
<<<<<<< HEAD
import prtdogtestimf from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
import petGromming from "../Assets/Untitled-design-60-1024x576.jpg"
import petWalking from "../Assets/walker-ser-lft.jpg"
import bookmydoctor from '../Assets/BookNowBarkAve.png'
=======
import dogAadoption from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
import dogGromming from "../Assets/"
>>>>>>> 95fbe53d0263a08dc80648e0b8adfd64f5a42382
import './petCard.css';

function PetCard() {
  return (
<<<<<<< HEAD
    <div className="petCard">
      <div className="container mt-4">
=======
    <>
      <div className="container mt-2">
>>>>>>> 95fbe53d0263a08dc80648e0b8adfd64f5a42382
        <div className="row">
          {/* First Row */}
          <div className="col-md-6">
            {/* <div className="card mb-3"> */}
              {/* Card 1 Content */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={dogAadoption}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dog Adoption </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ... */}
            {/* </div> */}
          </div>
          <div className="col-md-6">
            {/* <div className="card mb-3"> */}
              {/* Card 2 Content */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={petGromming}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dog Grooming</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              {/* ... */}
            </div>
          </div>
        </div>

        <div className="row">
          {/* Second Row */}
          <div className="col-md-6">
            {/* <div className="card mb-3"> */}
              {/* Card 3 Content */}
              <div className="card ">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={petWalking}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dog Walking</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ... */}
            {/* </div> */}
          </div>

          <div className="col-md-6">
            {/* <div className="card mb-3"> */}
              {/* Card 4 Content */}
              <div className="card ">
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
<<<<<<< HEAD
                      <h5 className="card-title">Book an appointment</h5>
=======
                      <h5 className="card-title">booking an appointment</h5>
>>>>>>> 95fbe53d0263a08dc80648e0b8adfd64f5a42382
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              {/* ... */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
