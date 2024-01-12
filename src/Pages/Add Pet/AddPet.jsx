import React, { useState } from 'react'
import './addpet.css'




function AddPet() {
    
    const [petType, setpetType] = useState('')
    const [breeds, setbreeds] = useState([])
    const [petThumbnails, setpetThumbnails] = useState('')
    const [petImageUpload, setpetImageUpload] = useState('')
    const [petvideoUpload, setpetvideoUpload] = useState('')
    const [petPdfUpload, setpetPdfUpload] = useState('')


    const [addPetForm, setaddPetForm] = useState({
      petType:'',
      petBreeds:'',
      petName:'',
      petDateofbirth:'',
      petPrice:'',
      petColour:'',
      petThumb:null,
      petImageUpload:null,
    })
  


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


  const onChange=(e)=>{
    debugger
    if (e.target.name==='petThumb') {
      const file = e.target.files[0]
      if (file) {
      setpetThumbnails(URL?.createObjectURL(file)) 
        
      }
    }
    if (e.target.name==='petImageUpload') {
      const file = e.target.files[0]
      if (file) {
        setpetImageUpload(URL?.createObjectURL(file))

      }
    }

    if (e.target.name ==='petvideoUpload') {
      const file = e.target.files[0]
      if (file) {
        setpetvideoUpload(URL.createObjectURL(file))
      }
    }
    if (e.target.name === 'petPdfUpload') {
      const file =e.target.files[0]
      if (file) {
        setpetPdfUpload(URL.createObjectURL(file))
      }
      
    }



    setaddPetForm({...addPetForm,[e.target.name]:e.target.value})

  }




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

               { petThumbnails && <img src={petThumbnails} alt="" 
                  style={{width:'100px', height:'100px'}}
                  />}
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
                name='petThumb'
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="petType">PET TYPE<span className="mandatory-indicator">*</span></label>
              </div>
              <div className="col-75">
                <select
                value={addPetForm.petType}
                  id="petType"
                  name="petType"
                  required
                  onChange={(e) => {
                    handlePetTypeChanges(e);
                    onChange(e);
                  }}

                  // onChange={handlePetTypeChanges}
                 
                
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
                value={addPetForm.petBreeds}
                  id="petBreeds"
                  name="petBreeds"
                  required
                  onChange={onChange}
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
                value={addPetForm.petName}
                  type="text"
                  id="petName"
                  name="name"
                  placeholder="Name.."
                  onChange={onChange}
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
                value={addPetForm.petDateofbirth}
                  type="date"
                  id="petDateofbirth"
                  name="dateofbirth"
                  placeholder="date of birth.."
                  onChange={onChange}
               
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
                value={addPetForm.petPrice}
                  type="number"
                  id="petPrice"
                  name="petPrice"
                  placeholder="Price.."
                  onChange={onChange}

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
                value={addPetForm.petColour}
                  type="text"
                  id="petColour "
                  name="petColour "
                  placeholder="Colour.."
                  onChange={onChange}

             
                />
              </div>
            </div>

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
                  name="petImageUpload"
                  accept="image/*"
                  onChange={onChange}
                />
                <br />
                <label htmlFor="videoUpload">SELECT A VIDEOS</label>
                <input
                  type="file"
                  id="videoUpload"
                  name="petvideoUpload"
                  accept="video/*"
                  onChange={onChange}

                />
                <br />
                <label htmlFor="pdfUpload">SELECT A PDFS</label>
                <input
                  type="file"
                  id="pdfUpload"
                  name="petPdfUpload"
                  accept="application/pdf"
                  onChange={onChange}

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
      <div style={{display:'flex', padding:'10px'}}>
      { petImageUpload && <img src={petImageUpload} alt="" 
              style={{width:'100px', height:'100px'}}
              />}

        { petvideoUpload && <video 
            src={petvideoUpload}
            controls
            width='100'
            height='100'
            type='video/*'
            /> }

      { petPdfUpload &&  <iframe src={petPdfUpload} frameborder="0"
            title='PDF Viewer'
            width='100'
            height='100'
            />}
      </div>
    </div>
    

  

    </>
  
  )
}

export default AddPet