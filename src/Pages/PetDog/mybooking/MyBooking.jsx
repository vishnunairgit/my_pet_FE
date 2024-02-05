import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../../config/AxiosInstance'
import { BASE_URL } from '../../../constants/BaseUrl'
import './mybooking.css'

function MyBooking() {

    const [myBoookings, setmyBoookings] = useState([])

useEffect(()=>{
getMyBookingData()
}, [])


const getMyBookingData =async ()=>{
    try {
        
        const response =await AxiosInstance.get('/users/getMyBookingData')
        debugger
        setmyBoookings(response.data)

    } catch (error) {
        console.error('Error fetching data:', error)
        
    }

};

  return (
    <div className='myboking row'>
    {myBoookings.length === 0 ? (
        <p>No booking available</p>
    ):(
        myBoookings.map((booking)=>(
            <div className="Dogcards">
            <div className={`card  ${booking?.petAdoptedBy? 'bg-warning':' '} `} >
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src={`${BASE_URL}/petFiles/${booking.petThumbUpload}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
      
                <div className="col-md-8 ">
                  <div className="card-body">
      
                  {/* <div className="card-body" onClick={()=>navigate(`/petViewPage/${propspetDogData._id}`)}> */}
                    <h5 className="card-title">Name : {booking?.petName}</h5>
                      <div className="pet-info">
                        <div className="info-item">
                          <strong className="label">Name :</strong>
                          <span className="value">{booking?.petName}</span>
                        </div>
                        <div className="info-item">
                          <strong className="label">PetType :</strong>
                          <span className="value">{booking?.petType}</span>
                        </div>
                        <div className="info-item">
                          <strong className="label">Breed :</strong>
                          <span className="value">{booking?.petBreeds}</span>
                        </div>
                        <div className="info-item">
                          <strong className="label">Gender :</strong>
                          <span className="value">{booking?.petGender}</span>
                        </div>
                        <div className="info-item">
                          <strong className="label">PetColour :</strong>
                          <span className="value">{booking?.petColour}</span>
                        </div>
                        <div className="info-item">
                          <strong className="label">DOB :</strong>
                          <span className="value">{booking?.petDateofbirth ? new Date(booking.petDateofbirth).toLocaleDateString('en-GB'):"no date selected" }</span>
                        </div>
                        {/*: {singlePetData?.petDateofbirth? new Date(singlePetData.petDateofbirth).toLocaleDateString("en-GB"):"no date selected"}
       */}
                      </div>
                  </div>
      
                </div>
              </div>
            </div>
          </div>

        ))
    )}


    </div>
  )
}
export default MyBooking






// import React, { useEffect, useState } from 'react';
// import AxiosInstance from '../../../config/AxiosInstance';
// import { BASE_URL } from '../../../constants/BaseUrl';
// import './mybooking.css';

// function MyBooking() {
//   const [myBoookings, setmyBoookings] = useState([]);

//   useEffect(() => {
//     getMyBookingData();
//   }, []);

//   const getMyBookingData = async () => {
//     try {
//       const response = await AxiosInstance.get('/users/getMyBookingData');
//       setmyBoookings(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       {myBoookings.map((booking) => (
//         <div key={booking._id} className="Dogcards">
//           <div className="card">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img
//                   src={`${BASE_URL}/petFiles/${booking.petThumbUpload}`}
//                   className="img-fluid rounded-start"
//                   alt="..."
//                 />
//               </div>

//               <div className="col-md-8 ">
//                 <div className="card-body">
//                   <h5 className="card-title">Name: {booking?.petName}</h5>
//                   <div className="pet-info">
//                     <div className="info-item">
//                       <strong className="label">Name:</strong>
//                       <span className="value">{booking?.petName}</span>
//                     </div>
//                     <div className="info-item">
//                       <strong className="label">PetType:</strong>
//                       <span className="value">{booking?.petType}</span>
//                     </div>
//                     <div className="info-item">
//                       <strong className="label">Breed:</strong>
//                       <span className="value">{booking?.petBreeds}</span>
//                     </div>
//                     <div className="info-item">
//                       <strong className="label">Gender:</strong>
//                       <span className="value">{booking?.petGender}</span>
//                     </div>
//                     <div className="info-item">
//                       <strong className="label">PetColour:</strong>
//                       <span className="value">{booking?.petColour}</span>
//                     </div>
//                     <div className="info-item">
//                       <strong className="label">DOB:</strong>
//                       <span className="value">
//                         {booking?.petDateofbirth
//                           ? new Date(booking.petDateofbirth).toLocaleDateString(
//                               'en-GB'
//                             )
//                           : 'no date selected'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyBooking;
