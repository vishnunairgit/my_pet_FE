import React, { useState } from "react";
import "./petviewpage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import AxiosInstance from "../../../config/AxiosInstance";
import { BASE_URL } from "../../../constants/BaseUrl";
import { toastSucces } from "../../../constants/plugines";
import { useSelector } from "react-redux";

function PetViewPage({}) {
  const [singlePetData, setsinglePetData] = useState({});

  const {userDetails}=useSelector((state)=>state.user)



  const { id } = useParams();
  // console.log(singlePetData,'-----singlePetData-------');

  useEffect(() => {
    getSinglePetData();
  }, []);

  const getSinglePetData = () => {
    AxiosInstance.get("users/getSinglePetData", { params: { petId: id } })
      .then((response) => {
        setsinglePetData(response.data);
        // debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // image view page

  const navigate = useNavigate();

  const petfiles = () => {
    navigate(`/FIleViewPage/${id}`);
  };

  // -------------------------------------------
  // ---------------------back function --------
  const handleBack = () => {
    navigate(-1);
  };

  // -----------------------razorrPay--------------------

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    // const result = await AxiosInstance.post("/payment/orders",{params:{petId:singlePetData?._id}});
    const result = await AxiosInstance.post("/payment/orders", {
      petId: singlePetData?._id,
    });

    // { params: { courtID: id } }

    // const result = await AxiosInstance.post("/payment/orders",{params:{petId:singlePetData._id}});

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_PDgtn0gQI671ND", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "my_pets....",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          petId: singlePetData?._id,
        };

        const result = await AxiosInstance.post("/payment/success", data);
        toastSucces(result.data.msg);
        navigate("/dogAdoption");
        // navigate('../PetAdopDogList/DogAdoption.jsx')
        // setsinglePetData(response.data)

        // alert(result.data.msg);
      },
      prefill: {
        name: "My_pet",
        email: "infovishnunair@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "My_pet",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  return (
    <div className="view-tree-container w-100 m-5">
      <div id="resume">
        <img
          className="thumbnail"
          src={`${BASE_URL}/petFiles/${singlePetData?.petThumbUpload}`}
          alt=""
        />
        <h3 style={{ textAlign: "center" }}>Name : {singlePetData?.petName}</h3>

        <div className="bodyhold">
          <div className="details">
            <div className="treeDetails">
              <dl>
                <dt></dt>
                <dd>
                  <ul>
                    <div className="treeRow">
                      <div className="treeLabel">
                        <strong>Type </strong>
                      </div>
                      <div className="treeValue">
                        : {singlePetData?.petType}{" "}
                      </div>
                    </div>

                    <div className="treeRow">
                      <div className="treeLabel">
                        <strong>Breeds </strong>
                      </div>
                      <div className="treeValue">
                        : {singlePetData?.petBreeds}{" "}
                      </div>
                    </div>
                    <div className="treeRow">
                      <div className="treeLabel">
                        <strong>Gender </strong>
                      </div>
                      <div className="treeValue">
                        : {singlePetData?.petGender}
                      </div>
                    </div>
                    <div className="treeRow">
                      <div className="treeLabel">
                        <strong>DOB </strong>
                      </div>
                      <div className="treeValue">
                        :{" "}
                        {singlePetData?.petDateofbirth
                          ? new Date(
                              singlePetData.petDateofbirth
                            ).toLocaleDateString("en-GB")
                          : "no date selected"}
                      </div>
                    </div>

                    <div className="treeRow">
                      <div className="treeLabel">
                        <strong>Price </strong>
                      </div>
                      <div className="treeValue">
                        : {singlePetData?.petPrice}
                      </div>
                    </div>
                    <div className="treeRow">
                      <div className="treeLabel">
                        <strong>Colour </strong>
                      </div>
                      <div className="treeValue">
                        : {singlePetData?.petColour}{" "}
                      </div>
                    </div>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>

          <div className="filetable"></div>
        </div>
        {/* {error && <ErrorMessage message={error} />} */}
        <div className="buttonHolder">
          <button
            type="button"
            className="btn btn-primary h-25"
            onClick={petfiles}>
            Pet Files
          </button>

          <button
            type="button"
            className="btn btn-info"
            onClick={displayRazorpay}>
            Adopt
          </button>

         {userDetails.role === 1 && <button
            className="btn btn-primary"
            // onClick={handleAction("Edit")}
            style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}>
            Edit
          </button>}

       { userDetails.role ===1 &&  <button
            className="btn btn-danger"
            // onClick={handledelete}
            style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}>
            Delete
          </button>}

          <button
            className="btn btn-dark"
            onClick={handleBack}
            style={{ backgroundColor: "rgb(0, 0, 0)", color: "white" }}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetViewPage;
