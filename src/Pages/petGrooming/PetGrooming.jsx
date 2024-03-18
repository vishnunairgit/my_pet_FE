

import React, { useState } from 'react';
import AxiosInstance from '../../config/AxiosInstance';

function PetGrooming() {
    const [addgrooming, setaddgrooming] = useState({
        petgroomingpackage: '',
        GroomingSesssion: [], // Change to an array to hold multiple sessions
        ServiceCharge: '',
        Duration: '',
    });

    const [GroomingSesssion, setGroomingSesssion] = useState([])

    const handlePackages = (e) => {
      const selectedPackage = e.target.value;
      let charge = '';
      let duration = '';
      let GroomingSessions = [];
  
      if (selectedPackage === 'NORMAL') {
          GroomingSessions = [
              'Bath',
              'Teeth Brushing',
              'Ear Cleaning',
              'Nail Cutting',
              'Eye Cleaning',
              'Anal sac cleaning',
              'Coat Conditioning',
              'Hygiene Trim',
              'De-Matting'
          ];
          charge = '2000.00';
          duration = '01 / 3 month';
      } else if (selectedPackage === 'PRIME') {
          GroomingSessions = [
              'Bath',
              'Teeth Brushing',
              'Ear Cleaning',
              'Nail Cutting'
          ];
          charge = '3500.00';
          duration = '02 / 5 month';
      } else if (selectedPackage === 'PRIME GOLD') {
          GroomingSessions = [
              'Bath',
              'Teeth Brushing',
              'Ear Cleaning',
              'Nail Cutting',
              'Eye Cleaning',
              'Anal sac cleaning',
              'Coat Conditioning',
              'Hygiene Trim'
          ];
          charge = '8000.00';
          duration = '05 / 8 month';
      } else if (selectedPackage === 'PRIME DIAMOND') {
          GroomingSessions = [
              'Bath',
              'Teeth Brushing',
              'Ear Cleaning',
              'Nail Cutting',
              'Eye Cleaning',
              'Anal sac cleaning',
              'Coat Conditioning',
              'Hygiene Trim',
              'De-Matting'
          ];
          charge = '15000.00';
          duration = '10 / 1 year';
      }
  
      setaddgrooming({
          ...addgrooming,
          petgroomingpackage: selectedPackage,
          ServiceCharge: charge,
          Duration: duration,
          GroomingSesssion: GroomingSessions
      });
  };
  
    const handlegroomingSection = (e, index) => {
      setaddgrooming(prevState => {
          const updatedSessions = [...prevState.GroomingSesssion];
          updatedSessions[index] = e.target.value;
          return { ...prevState, GroomingSesssion: updatedSessions };
      });
  };
  

    const handlegrooming = (e) => {
        setaddgrooming({ ...addgrooming, [e.target.name]: e.target.value });
    };

    const handleSubmitpetGrooming = () => {
        AxiosInstance.post('/admin/addGrooming', addgrooming)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="addtree">
                <div className="container">
                    <div className="leftSide-container">
                        <h2>GROOMING</h2>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="petgroomingpackage">
                                    PACKAGES <span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                <select
                                    value={addgrooming.petgroomingpackage}
                                    id="petgroomingpackage"
                                    name="petgroomingpackage"
                                    onChange={(e) => {
                                        handlePackages(e);
                                    }}
                                    required
                                >
                                    <option value="">Select Packages</option>
                                    <option value="NORMAL">NORMAL</option>
                                    <option value="PRIME">PRIME</option>
                                    <option value="PRIME GOLD">PRIME GOLD</option>
                                    <option value="PRIME DIAMOND">PRIME DIAMOND</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="GeoomingSesssion">
                                    Grooming Session<span className="mandatory-indicator">*</span>
                                </label>
                            </div>
                            <div className="col-75">
                                {addgrooming.GroomingSesssion.map((point, index) => (
                                    <div key={index} >
                                        <input
                                            type="text"
                                            value={point}
                                            // value={addgrooming.GroomingSesssion}
                                            name={GroomingSesssion}
                                            onChange={(e) => {
                                                handlegroomingSection(e, index);
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
                                    value={addgrooming.ServiceCharge}
                                    type="number"
                                    id="ServiceCharge"
                                    name="ServiceCharge"
                                    placeholder="Service Charge.."
                                    onChange={(e) => {
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
                                    value={addgrooming.Duration}
                                    type="text"
                                    id="duration"
                                    name="Duration"
                                    placeholder="Duration..."
                                    onChange={(e) => {
                                        handlegrooming(e);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttonHolder">
                    <button
                        className="button-17"
                        type="button"
                        style={{ backgroundColor: 'rgb(10, 150, 250)', color: 'white' }}
                        onClick={handleSubmitpetGrooming}
                    >
                        Submit
                    </button>
                    <button className="button-17" style={{ backgroundColor: 'rgb(0, 150, 0)', color: 'white' }}>
                        Reset
                    </button>
                    <button className="button-17" style={{ backgroundColor: 'rgb(200, 0, 0)', color: 'white' }}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PetGrooming;
