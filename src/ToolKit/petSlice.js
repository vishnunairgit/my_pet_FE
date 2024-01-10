import { createSlice } from "@reduxjs/toolkit";


const petSlice=createSlice({
    name:'petdog',
    initialState:{
        petDetails:{},
        // usreRole:'',

    },
    reducers:{
        setpetDetails:(state , action)=>{
            state.userDetails={}
        },
        // setusreRole:(state,action)=>{
        //     state.usreRole=''
        // }
    }
})

export const {setpetDetails}=petSlice.actions
export default petSlice.reducer
