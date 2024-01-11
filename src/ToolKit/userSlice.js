
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={userDetails:{}}


const userSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
        setuserDetails:(state,action)=>{
            state.userDetails=action.payload
        },
        // setusreRole:(state,action)=>{
        //     state.usreRole=''
        // }
    }
})

export const {setuserDetails}=userSlice.actions
export default userSlice.reducer



// the code we can write in another way
// import { createSlice } from "@reduxjs/toolkit";
// const userSlice=createSlice({
//     name:'user',
//     initialState:{
//         userDetails:{},
//         // usreRole:'',
//     },
//     reducers:{
//         setuserDetails:(state,action)=>{
//             state.userDetails=action.payload
//         },
//         // setusreRole:(state,action)=>{
//         //     state.usreRole=''
//         // }
//     }
// })
// export const {setuserDetails}=userSlice.actions
// export default userSlice.reducer
