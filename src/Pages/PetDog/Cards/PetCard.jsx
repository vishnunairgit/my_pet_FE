import React from "react";
import prtdogtestimf from "../Assets/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
import './petCard.css';

function PetCard() {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {/* First Row */}
          <div className="col-md-6">
            {/* <div className="card mb-3"> */}
              {/* Card 1 Content */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={prtdogtestimf}
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
                      src={prtdogtestimf}
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
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={prtdogtestimf}
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
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={prtdogtestimf}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dog Conclusion</h5>
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
    </>
  );
}

export default PetCard;
