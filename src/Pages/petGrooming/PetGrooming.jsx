
import React, { useState } from 'react'
import AxiosInstance from '../../config/AxiosInstance';

function PetGrooming() {

    const [addgrooming, setaddgrooming] = useState({
        petgroomingpackage:'',
        GeoomingSesssion:'',
        ServiceCharge:'',
        Duration:'',
    })
    

  // -----------grooming package data--------------

  const [GroomingSesssion, setGroomingSesssion] = useState([
    'Bath',
    'Teeth Brushing',
    'Ear Cleaning',
    'Nail Cutting',
    'Eye Cleaning',
    'Anal sac cleaning',
    'Coat Conditioning',
    'Hygiene Trim',
    'De-Matting',
  ])

  // -----------service charge and duration -------------
  const [Charge, setCharge] = useState('')
  const [Duration, setDuration] = useState('')



  const handlegroomingSection = (e, index) => {

    const updatePoints = [...GroomingSesssion];
    updatePoints[index] = e.target.value;
    setGroomingSesssion(updatePoints);
  }

// -------servicce charge------------

const handlePackages = (e) => {
    const selectedpackages = e.target.value;
    setCharge(selectedpackages);
    setDuration(selectedpackages);
  
    if (selectedpackages === 'NORMAL') {
      setCharge('2000.00');
      setDuration('01 / 3 month');
    }
    else if (selectedpackages === 'PRIME') {
      setCharge('3500.00');
      setDuration('02 / 5 month');
    }
    else if (selectedpackages === 'PRIME GOLD'){
      setCharge('8000.00');
      setDuration('05 / 8 month');
    }
    else if (selectedpackages === 'PRIME DIAMOND' ) {
      setCharge('15000.00');
      setDuration('10 / 1 year');
    }
    else {
      setCharge('');
      setDuration('');
    }
  
    console.log("Selected Package:", selectedpackages);
    console.log("Charge:", Charge);
    console.log("Duration:", Duration);
  }

  const handlegrooming = (e)=>{
    setaddgrooming({...addgrooming, [e.target.name]: e.target.value})



  }

  const handleSubmitpetGrooming =()=>{
    AxiosInstance.post('/admin/addGrooming', addgrooming)
    .then((responce)=>{
        debugger
        console.log(responce);
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  
  return (
    <div>
      <div className="addtree">
        {/* <form> */}
        {/* <form onSubmit={handleSubmitAddPet}> */}

        <div className="container">
          <div className="leftSide-container">
            <h2>GROOMING</h2>
            <div className="Tree-thumbnail">
              <div className="Tree-thumbnail-leftside">
              

              </div>
             
            </div>


            <div className="row">
              <div className="col-25">
                <label htmlFor="petgroomingpackage">
                  PACKAGES <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <select
                value={addgrooming.petgroomingpackage}
                  //   value={addPetForm.petGender}
                  id="petgroomingpackage"
                  name="petgroomingpackage"
                  onChange={(e)=>{
                    handlePackages(e);
                    handlegrooming(e);
                  }}

                  required

                >
                  <option value="">Select Packages </option>
                  <option value="NORMAL">NORMAL</option>
                  <option value="PRIME">PRIME</option>
                  <option value="PRIME GOLD">PRIME GOLD</option>
                  <option value="PRIME DIAMOND">PRIME DIAMOND</option>
                </select>
              </div>
            </div>


            {/* <div className="row">
              <div className="col-25">
                <label htmlFor="GeoomingSesssion">
                  Grooming Session<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                {GroomingSesssion.map((point, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={point}
                      name='GroomingSesssion'
                      onChange={(e) => {
                        handlegroomingSection(e, index)
                        handlegrooming(e);
                    }

                      }
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
             */}
             <div className="row">
  <div className="col-25">
    <label htmlFor="GeoomingSesssion">
      Grooming Session<span className="mandatory-indicator">*</span>
    </label>
  </div>
  <div className="col-75">
    {GroomingSesssion.map((point, index) => (
      <div key={index}>
        <input
          type="text"
          value={point}
          name={`GroomingSesssion-${index}`} // Set a unique name for each input
          onChange={(e) => {
            handlegroomingSection(e, index);
            handlegrooming(e);
          }}
          required
        />
      </div>
    ))}
  </div>
</div>


            <div className="row">
              <div className="col-25">
                <label htmlFor="ServiceCharge">
                  Service Charge<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  value={Charge}
                  type="number"
                  id="ServiceCharge"
                  name="ServiceCharge"
                  placeholder="Service Charge.."
                  onChange={(e)=> {
                    setCharge(e.target.value) // If you want to allow manual input as well
                    handlegrooming(e);


                }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Duration">
                  Package Duration/ NO of grooming<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  value={Duration}
                  type="text"
                  id="duration "
                  name="duration"
                  placeholder="Duration..."
                  onChange={(e)=> {
                    setDuration(e.target.value)// If you want to allow manual input as well

                     handlegrooming(e);

                }} 
                //   onChange={onChange}
                />
              </div>
            </div>





          </div>


        </div>

        {/* {error && <ErrorMessage message={error} />} */}
        <div className="buttonHolder">
          <button
            className="button-17"
            type="submit"
            style={{ backgroundColor: "rgb(10, 150, 250)", color: "white" }}
          onClick={handleSubmitpetGrooming}
          >
            Submit
          </button>
          <button
            className="button-17"
            // onClick={handleReset}
            style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}>
            Reset
          </button>
          <button
            className="button-17"
            // onClick={handleCancel}
            style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}>
            Cancel
          </button>
        </div>

        {/* </form> */}
      </div>





    </div>
  )
}

export default PetGrooming
