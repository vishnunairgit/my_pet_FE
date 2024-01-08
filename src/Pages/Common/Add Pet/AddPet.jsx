import React, { useState } from 'react'
import './addpet.css'




function AddPet() {
    
    const [petType, setpetType] = useState('')
    const [breeds, setbreeds] = useState([])


    const handlePetTypeChanges = (e) => {
        const selectedPetType = e.target.value;;
        setpetType(selectedPetType);

        if (selectedPetType==='DOG') {
            setbreeds(['Labrador','Golden Retriever','Poodle','German Shepherd','Rottweiler','Husky','pomerainn'])
        }
        else if (selectedPetType==='CAT') {
            setbreeds(['Siamese', 'Persian', 'Maine Coon','Bombay Cat','Himalayan Cat','Ragdoll'])
        }
        else if (selectedPetType==='BRIDS') {
            setbreeds(['love birds', 'kuyil', 'thata ','dddd',' vvvvv','hhhhh'])
        }
        else if (selectedPetType==='FISH') {
            setbreeds(['ayala', 'mathi', 'kora ','koonthal ','shark ','kkkkk'])
        }
        else if (selectedPetType==='OTHER PETS') {
            setbreeds(['lldld', 'djdjjd', 'dkjdkjd ',' dkdkd',' hdhhd','jdjdj'])
        }
        else{
            setbreeds([]);
        }
    };

  return (

    <>
    
    <div className="addtree">
      <form>
      {/* <form onSubmit={handleSubmit}> */}

        <div className="container">
          <div className="leftSide-container">
            <h2>ADD PET</h2>
            <div className="Tree-thumbnail">
              <div className="Tree-thumbnail-leftside">
                {/* {treeImage ? (
                  <img
                    src={treeImage}
                    alt="Profile Preview"
                    style={{ width: "200px", height: "200px" }}
                  />
                ) : (
                  <img
                    title="No Image"
                    src={Btree}
                    alt="No Image"
                    style={{ width: "200px", height: "200px" }}
                  />
                )} */}
              </div>
              <div className="Tree-thumbnail-rightside">
                <label htmlFor="image">Upload Thumbnail</label>
                <br/>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                //   onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="petType">PET TYPE<span className="mandatory-indicator">*</span></label>
              </div>
              <div className="col-75">
                <select
                  id="petType"
                  name="petType"
                  required
                  onChange={handlePetTypeChanges}
                //   onChange={(e) => {
                //     setSensorType(e.target.value);
                //   }}
                >
                  <option value="">Select Pet</option>
                  <option value="DOG">DOG</option>
                  <option value="CAT">CAT</option>
                  <option value="BRIDS">BRIDS</option>
                  <option value="FISH">FISH</option>
                  <option value="OTHER PETS">OTHER PETS</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="breeds">SELECT BREEDS<span className="mandatory-indicator">*</span></label>
              </div>
              <div className="col-75">
                <select
                  id="breeds"
                  name="breeds"
                  required
                //   onChange={(e) => {
                //     setAssignSensor(e.target.value);
                //   }}
                >
                  <option value="">Select Breeds</option>
                  {breeds.map((breed) =>(
                    <option key={breed} value={breed}>{breed}</option>
                  ))}
                 
                </select>
              </div>
            </div>


            <div className="row">
              <div className="col-25">
                <label htmlFor="name">
                  NAME <span className="mandatory-indicator">*</span>
                </label>
              </div>

              <div className="col-75">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name.."
                //   onChange={(e) => {
                //     setDisplayID(e.target.value);
                //   }}
                  required
                />
                <span> </span>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="date of birth">
                  DATE OF BIRTH <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="date"
                  id="date of birth"
                  name="date of birth"
                  placeholder="date of birth.."
                //   onChange={(e) => {
                //     setassetType(e.target.value);
                //   }}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="Price">
                  PRICE<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  id="Price"
                  name="Price"
                  placeholder="Price.."
                //   onChange={(e) => {
                //     setAccessionNumber(e.target.value);
                //   }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="Colour ">
                Colour <span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="Colour "
                  name="Colour "
                  placeholder="Colour.."
                //   onChange={(e) => {
                //     setAccessionNumber(e.target.value);
                //   }}
                />
              </div>
            </div>

           

           


           
          

            
            {/* <div className="row">
              <div className="col-25">
                <label htmlFor="user">SELECT USER</label>
              </div>
              <div className="col-75">
                <select
                  id="user"
                  name="user"
                  onChange={(e) => {
                    setoperatorID(e.target.value);
                  }}
                >
                  <option value="australia">Select User</option>
                  {filteredUser &&
                    filteredUser.Operator.map((user) => (
                      <option key={user.userID} value={user.userID}>
                        {user.userID}
                      </option>
                    ))}
                  {filteredUser &&
                    sensorType === "RFID" &&
                    filteredUser.Rfiduser.map((user) => (
                      <option key={user.userID} value={user.userID}>
                        {user.userID}
                      </option>
                    ))}
                </select>
              </div>
            </div> */}
{/* 
            <div className="row">
              <div className="col-25">
                <label htmlFor="viewer">SELECT VIEWER</label>
              </div>
              <div className="col-75">
                <select
                  id="viewer"
                  name="viewer"
                  onChange={(e) => {
                    setAssignViewer(e.target.value);
                  }}
                >
                  <option value="australia">Select Viewer</option>
                  {filteredUser &&
                    filteredUser.Viewer.map((user) => (
                      <option key={user.userID} value={user.userID}>
                        {user.userID}
                      </option>
                    ))}
                </select>
              </div>
            </div> */}

          </div>

          <div className="rightSide-container">
            <div className="rightSide-container-2">
              <div className="text">
                <h4>UPLOAD FILES</h4>
              </div>
              <div className="fileupload">
                <label htmlFor="imageUpload">SELECT AN IMAGES</label>
                <input
                  type="file"
                  id="imageUpload"
                  name="imageUpload"
                  accept="image/*"
                />
                <br />
                <label htmlFor="videoUpload">SELECT A VIDEOS</label>
                <input
                  type="file"
                  id="videoUpload"
                  name="videoUpload"
                  accept="video/*"
                />
                <br />
                <label htmlFor="pdfUpload">SELECT A PDFS</label>
                <input
                  type="file"
                  id="pdfUpload"
                  name="pdfUpload"
                  accept="application/pdf"
                />
                <br />
                {/* <label htmlFor="audioUpload">SELECT AN AUDIO FILES</label>
                <input
                  type="file"
                  id="audioUpload"
                  name="audioUpload"
                  accept="audio/*"
                />
                <br /> */}
              </div>
            </div>
          </div>
        </div>
        {/* {error && <ErrorMessage message={error} />} */}
        <div className="buttonHolder">
          {/* <span><h3></h3></span> */}
          <button
            className="button-17"
            type="submit"
            style={{ backgroundColor: "rgb(10, 150, 250)", color: "white" }}
          >
            Submit
          </button>
          <button
            className="button-17"
            // onClick={handleReset}
            style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}
          >
            Reset
          </button>
          <button
            className="button-17"
            // onClick={handleCancel}
            style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    
    </>
  
  )
}

export default AddPet