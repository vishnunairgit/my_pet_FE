import React, { useEffect, useState } from 'react'
import "../addpet.css";
import AxiosInstance from '../../../config/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../constants/BaseUrl';
import { toastSucces } from '../../../constants/plugines';

function EditPet() {

  const navigate=useNavigate()

  // console.log(id,'----/:id-----');
// ---------all the data we are getting  here-----
  const [petdata, setpetdata] = useState({ })

// ------------data upload---
  const [petEditFiles, setpetEditFiles] = useState({
    petThumbUpload:null,
    petImageUpload: [],
    petVideoUpload: [],
    petPdfUpload: [],
  });



const [petEidtType, setpetEidtType] = useState(" ")

const [editbreeds, seteditbreeds] = useState([ ])

  // -----------date formate we need to convert this way, otherwize it should not display in thn edit page----------
  const formattedDate = petdata.petDateofbirth ? new Date(petdata.petDateofbirth).toISOString().split('T')[0] : '';


  const { id } = useParams();
  // console.log(singlePetData,'-----singlePetData-------');

  useEffect(() => {
    getSinglePetData();
  }, []);

  const getSinglePetData = () => {
    AxiosInstance.get("users/getSinglePetData", { params: { petId: id } })
      .then((response) => {
        setpetdata(response.data);
        // debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const editPetFiles = (e) => {
    const files = e.target.files;
    const fieldName = e.target.name;

    if (fieldName === "petThumbUpload") {
      setpetdata({ ...petdata, [fieldName]: files[0] });
    } else {
      // If multiple files are allowed for other types of uploads, you can append them to the existing array
      setpetEditFiles({ ...petEditFiles, [fieldName]: [...petEditFiles[fieldName], ...files] });
    }


  };


  const editpet =(e)=>{
    setpetdata({...petdata,[e.target.name]:e.target.value})

  }


  const handlePetTypeChangesEdit = (e) => {
    const selectedPetType = e.target.value;
    setpetEidtType(selectedPetType);

    if (selectedPetType === "DOG") {
      seteditbreeds([
        "Labrador",
        "Golden Retriever",
        "Poodle",
        "German Shepherd",
        "Rottweiler",
        "Husky",
        "pomerainn",
      ]);
    } else if (selectedPetType === "CAT") {
      seteditbreeds([
        "Siamese",
        "Persian",
        "Maine Coon",
        "Bombay Cat",
        "Himalayan Cat",
        "Ragdoll",
      ]);
    } else if (selectedPetType === "BRIDS") {
      seteditbreeds(["love birds", "kuyil", "thata ", "dddd", " vvvvv", "hhhhh"]);
    } else if (selectedPetType === "FISH") {
      seteditbreeds(["ayala", "mathi", "kora ", "koonthal ", "shark ", "kkkkk"]);
    } else if (selectedPetType === "OTHER PETS") {
      seteditbreeds(["lldld", "djdjjd", "dkjdkjd ", " dkdkd", " hdhhd", "jdjdj"]);
    } else {
      seteditbreeds([]);
    }
  };



  const handleSubmitEditPet = ()=>{

    AxiosInstance.post('/admin/SubmitEditPet',petdata).then((res)=>{

    // if we are updating only data call the sunction 
      // setpetdata(petdata)

      
    // if we are updating imgaes also use 
    getSinglePetData()



      navigate(`/SinglePetViewPage/${id}`);
      toastSucces('Pet data edited successfully')


    }).catch((err)=>{
      console.log(err);

    })
  }



  return (
    <div>
       <>
      <div className="addtree">
        {/* <form> */}
        {/* <form onSubmit={handleSubmitAddPet}> */}

        <div className="container">
          <div className="leftSide-container">
            <h2>EDIT PET</h2>
            <div className="Tree-thumbnail">
              

                <div className="Tree-thumbnail-leftside">
                  {petdata.petThumbUpload && (
                    <img
                    src={`${BASE_URL}/petFiles/${petdata?.petThumbUpload}`}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  )}
                </div>
              
              <div className="Tree-thumbnail-rightside">
                <label htmlFor="image">Upload Thumbnail</label>
                <br />
                <input
                  type="file"

                 name="petThumbUpload"
                  id="petThumbUpload"
                  accept="image/*"
                  onChange={editPetFiles}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="petType">
                  PET TYPE<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <select
                  value={petdata.petType}
                  id="petType"
                  name="petType"
                  required
                  onChange={(e) => {
                    handlePetTypeChangesEdit(e);
                    editpet(e);
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
                <label htmlFor="breeds">
                  SELECT BREEDS<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <select
                  value={petdata.petBreeds}
                  id="petBreeds"
                  name="petBreeds"
                  required
                  onChange={editpet}
                  >
                  {/* <option value="">Select Breeds</option>
                  {editbreeds.map((editBreed)=>(
                    <option key={editBreed} value={editbreeds}>
                      {editbreeds}
                      </option>
                  ))} */}

                  {editbreeds.map((breed) => (
                    <option key={breed} value={breed}
                    >
                      {breed}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="petType">
                  PET GENDER<span className="mandatory-indicator">*</span>
                </label>
              </div>
              <div className="col-75">
                <select
                  value={petdata.petGender}
                  id="petGender"
                  name="petGender"
                  onChange={editpet}
                  required
                 
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
                  value={petdata.petName}
                  type="text"
                  id="petName"
                  name="petName"
                  placeholder="Name.."
                  required
                  onChange={editpet}
                />
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
                  value={formattedDate}
                  type="date"
                  id="petDateofbirth"
                  name="petDateofbirth"
                  placeholder="date of birth.."
                  onChange={editpet}
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
                  value={petdata.petPrice}
                  type="number"
                  id="petPrice"
                  name="petPrice"
                  placeholder="Price.."
                  onChange={editpet}
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
                 value={petdata.petColour}
                  type="text"
                  id="petColour "
                  name="petColour"
                  placeholder="Colour.."
                  onChange={editpet}
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
                  onChange={editPetFiles}
                  />
                <br />
                <label htmlFor="videoUpload">SELECT A VIDEOS</label>
                <input
                  type="file"
                  id="videoUpload"
                  name="petvideoUpload"
                  accept="video/*"
                  onChange={editPetFiles}
                  />
                <br />
                <label htmlFor="pdfUpload">SELECT A PDFS</label>
                <input
                  type="file"
                  id="pdfUpload"
                  name="petPdfUpload"
                  accept="application/pdf"
                  onChange={editPetFiles}
                  />
                <br />
              </div>
            </div>

            <div style={{ display: "flex", padding: "10px" }}>

              {/* {petEditFiles.petImageUpload && (

                <img
                  src={URL.createObjectURL(petEditFiles.petImageUpload)}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              )} */}
             

              {/* {petEditFiles.petvideoUpload && (
                <video
                src={URL.createObjectURL(petEditFiles.petvideoUpload)}
                // controls
                  width="100"
                  height="100"
                  type="video/*"
                />
              )} */}
              
              {/* {petEditFiles.petPdfUpload && (
                <iframe
                  src={URL.createObjectURL(petEditFiles.petPdfUpload)}
                  frameborder="0"
                  title="PDF Viewer"
                  width="100"
                  height="100"
                />
              )} */}
              <div style={{ display: "flex", padding: "10px" }}>
  {petEditFiles?.petImageUpload?.map((image, index) => (
    <img
      key={index}
      src={URL.createObjectURL(image)}
      alt={`Image ${index + 1}`}
      style={{ width: "100px", height: "100px", marginRight: "10px" }}
    />
  ))}

  {petEditFiles?.petvideoUpload?.map((video, index) => (
    <video
      key={index}
      src={URL.createObjectURL(video)}
      width="100"
      height="100"
      type="video/*"
    />
  ))}

  {petEditFiles?.petPdfUpload?.map((pdf, index) => (
    <iframe
      key={index}
      src={URL.createObjectURL(pdf)}
      title="PDF Viewer"
      width="100"
      height="100"
    />
  ))}
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
            onClick={handleSubmitEditPet}
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
    </>





    </div>
  )
}

export default EditPet