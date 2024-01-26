import React, { useState } from 'react'
import './addpet.css';
import AxiosInstance from '../../config/AxiosInstance';





function AddPet() {
    
    const [petType, setpetType] = useState('')
    const [breeds, setbreeds] = useState([])
    const [petThumbnails, setpetThumbnails] = useState('')
    const [petImageUpload, setpetImageUpload] = useState('')
    const [petvideoUpload, setpetvideoUpload] = useState('')
    const [petPdfUpload, setpetPdfUpload] = useState('')

    const [addPetForm, setaddPetForm] = useState({
      petType: "",
      petBreeds: "",
      petGender: "",
      petName: "",
      petDateofbirth: "",
      petPrice: "",
      petColour: "",
      
      
    })

    const [petimage, setpetimage] = useState({
      petThumb:null,
      petImageUpload:null,
      petvideoUpload:null,
      petPdfUpload:null,

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


  const onChange = (e) => {
    // debugge
      setaddPetForm({ ...addPetForm, [e.target.name]: e.target.value});
    
  };

  const addPetFiles = (e)=>{

    setpetimage(e.target.files[0])

    if (e.target.name==='petThumb') {
      const file = e.target.files[0]
      if (file) {
      setpetThumbnails(URL?.createObjectURL(file));
      }
    }

    else if (e.target.name==='petImageUpload') {
      const file = e.target.files[0]
      if (file) {
        setpetImageUpload(URL?.createObjectURL(file));
      }
    }

    else if (e.target.name ==='petvideoUpload') {
      const file = e.target.files[0]
      if (file) {
        setpetvideoUpload(URL.createObjectURL(file));
      }
    }
    
    else if (e.target.name === 'petPdfUpload') {
      const file =e.target.files[0]
      if (file) {
        setpetPdfUpload(URL.createObjectURL(file));
      }
    }
    
  }



  const handleSubmitAddPet =()=>{

    let fileData =new FormData()

    fileData.append('ImagePet',petimage)

// here we are sending all the data to backend. file data and form data. also we need to set a header. multipart means both file data and normal data
   AxiosInstance.post('/admin/addPetData', fileData,{params:addPetForm},{Headers:{"content-type":'multipart/form-data'}}).then((Response)=>{

   })
  }



  return (
    <>
    <div className="addtree">
      {/* <form> */}
      {/* <form onSubmit={handleSubmitAddPet}> */}

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
                  onChange={addPetFiles}
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
                <label htmlFor="petType">PET GENDER<span className="mandatory-indicator">*</span></label>
              </div>
              <div className="col-75">
                <select
                value={addPetForm.petGender}
                  id="petGender"
                  name="petGender"
                  onChange={onChange}
                  required
                  // onChange={(e) => {
                  //   handlePetTypeChanges(e);
                  //   onChange(e);
                  // }}
                  
                >
                  <option value="">Select PetGender</option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  
                </select>
              </div>
            </div>



            <div className="row">
              <div className="col-25">
                <label htmlFor="Name">
                  NAME <span className="mandatory-indicator">*</span>
                </label>
              </div>

              <div className="col-75">
                <input
                value={addPetForm.petName}
                  type="text"
                  id="petName"
                  name="petName"
                  placeholder="Name.."
                  required
                  onChange={onChange}
                />
                {/* <span> </span> */}
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
                  name="petDateofbirth"
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
                  type='text'
                  id="petColour "
                  name="petColour"
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
                  onChange={addPetFiles}
                />
                <br />
                <label htmlFor="videoUpload">SELECT A VIDEOS</label>
                <input
                  type="file"
                  id="videoUpload"
                  name="petvideoUpload"
                  accept="video/*"
                  onChange={addPetFiles}

                />
                <br />
                <label htmlFor="pdfUpload">SELECT A PDFS</label>
                <input
                  type="file"
                  id="pdfUpload"
                  name="petPdfUpload"
                  accept="application/pdf"
                  onChange={addPetFiles}

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
            onClick={handleSubmitAddPet}
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

      


      {/* </form> */}
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