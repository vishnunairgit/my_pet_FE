import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../constants/BaseUrl";
import AxiosInstance from "../../../../config/AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import "./fIleViewPage.css";

function FIleViewPage() {
  const [singlePetData, setsinglePetData] = useState({});
  const [fullscreenImage, setFullscreenImage] = useState(false);
  const [fullscreenVideo, setFullscreenVideo] = useState(false);
  const [fullscreenPdf, setFullscreenPdf] = useState(false);


  const { id } = useParams();

  useEffect(() => {
    getSinglePetData();
  },[ ]);

  const getSinglePetData = () => {
    AxiosInstance.get("users/getSinglePetData", { params: { courtID: id } })
      .then((response) => {
        setsinglePetData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleFullscreenImage = () => {
    setFullscreenImage(!fullscreenImage);
  };

  const toggleFullscreenVideo = () => {
    setFullscreenVideo(!fullscreenVideo);
  };

  const toggleFullscreenPdf = () => {
    setFullscreenPdf(!fullscreenPdf);
  };

  const navigate = useNavigate();

  const handleBackpetview = () => {
    navigate(-1);
  };

  return (
    <div className="FIleViewPage m-3">
      <div className={`image ${fullscreenImage ? "fullscreen" : ""}`}>
        {singlePetData?.petImageUpload?.map((image, index) => (
          <div key={index} onClick={toggleFullscreenImage}>
            {image && (
              <img
                src={`${BASE_URL}/petFiles/${image}`}
                alt={`Pet Image ${index + 1}`}
              />
            )}
            <p>Image {index + 1}</p>
          </div>
        ))}
      </div>

      {/* <div className={`video ${fullscreenVideo ? "fullscreen" : ""}`}>
        
        {singlePetData?.petVideoUpload?.map((video, index) => (
          <div key={index} onClick={toggleFullscreenVideo}>
            <p>{video}</p>
            {video && (
              <video width="320" height="240" controls>
                <source
                  src={`${BASE_URL}/petFiles/${video}`}
                  type="video/mp4"
                  alt="'''''''''"
                />
                Your browser does not support the video tag.
              </video>
            )}
            <p>Video {index + 1}</p>
          </div>
        ))}
      </div> */}
  <div className={`video ${fullscreenVideo ? "fullscreen" : ""}`}>
  {singlePetData?.petVideoUpload?.length > 0 ? (
    singlePetData?.petVideoUpload.map((video, index) => (
      <div key={index} onClick={toggleFullscreenVideo}>
        {video ? (
          <video width="320" height="240" controls>
            <source
              src={`${BASE_URL}/petFiles/${video}`}
              type="video/mp4"
              alt="'''''''''"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Video {index + 1}</p>
          
        )}
      </div>
    ))
  ) : (
    <p>No video files</p>
  )}
</div>



      <div className={`pdf ${fullscreenPdf ? "fullscreen" : ""}`}>
        {singlePetData?.petPdfUpload?.map((pdf, index) => (
          <div key={index} onClick={toggleFullscreenPdf}>
            {pdf && (
              <iframe
                src={`${BASE_URL}/petFiles/${pdf}`}
                title={`Pet PDF ${index + 1}`}
                width="320"
                height="300"
                alt="--------"
              ></iframe>
            )}
            <p>PDF {index + 1}</p>
          </div>
        ))}
      </div>

      <button
            className="btn btn-dark"
            onClick={handleBackpetview}
            style={{ backgroundColor: "rgb(0, 0, 0)", color: "white" }}>
            Back
          </button>
    </div>
  );
}

export default FIleViewPage;
