import React from 'react'
import adopt_cate from "../assets/cata doption.jpg"
import catGrooming from "../assets/bath-haircut-desktop.jpg"
import catewlaker from "../assets/cat walkers.jpg"
import petDr from "../../PetDog/Assets/BookNowBarkAve.png"
import { useNavigate } from 'react-router-dom'

function CatCards() {


    const navigate =useNavigate()

    const CatAdoption =()=>{
        navigate('/catAdopt')
    }
  return (
    <>
     <div className="petcard">
      <div className="petcard-1 ">

        <div className="card m-1 " >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={adopt_cate}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8" >
              <div className="card-body" 
              onClick={CatAdoption}
            >
                <h5 className="card-title">Adoption a Cat</h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog.
                </p>
                <button className=" btn btn-primary" 
                onClick={CatAdoption}
                >BOOK NOW</button>

                <p className="card-text">
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card m-1" >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={catGrooming}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cat Grooming</h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog.
                </p>
                <button className=" btn btn-primary" >BOOK NOW</button>
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
                src={catewlaker}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cat Walkers</h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog.
                </p>
                <button className=" btn btn-primary" >BOOK NOW</button>

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
                src={petDr}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Book Pet Consultants</h5>
                <p className="card-text">
                Dog adoption is one of the best ways to clear the 
                shelters and enrich your life with a furry new friend, love dog.
                </p>
                <button className=" btn btn-primary" >BOOK NOW</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



    </>
  )
}

export default CatCards