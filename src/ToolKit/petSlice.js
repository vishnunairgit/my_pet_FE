import { createSlice } from "@reduxjs/toolkit";

const PET_INITIAL_STATE = {
    petDetails:JSON.parse(localStorage.getItem('pets')) || {} 
}

const petSlice = createSlice({
    name:'pets',
    initialState: PET_INITIAL_STATE,
    reducers:{
        setpetDetails: (state,action)=>{
            state.petDetails = action.payload
        }
    },
    }
   
) ;

export const { setpetDetails }=petSlice.actions
export default petSlice.reducer

// petSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const PET_INITIAL_STATE = {
//   petDetails:JSON.parse(localStorage.getItem("pets")) || null,
// };
// // console.log("PET_INITIAL_STATE", PET_INITIAL_STATE);


// const petSlice = createSlice({
//   name: "pets",
//   initialState: PET_INITIAL_STATE,
//   reducers: {
//     setpetDetails: (state, action) => {
//       state.petDetails = action.payload;
//       localStorage.setItem("pets", JSON.stringify(action.payload));
//     },
//     clearPetDetails: (state) => {
//       state.petDetails = null;
//       localStorage.removeItem("pets");
//     },
//   },
// });

// export const { setpetDetails, clearPetDetails } = petSlice.actions;
// export default petSlice.reducer;
