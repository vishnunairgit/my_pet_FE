import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'user',
    initialState:{
        userDetails:{name:'vvvvv'},
        // usreRole:'',

    },
    reducers:{
        setuserDetails:(state , action)=>{
            state.userDetails={}
        },
        // setusreRole:(state,action)=>{
        //     state.usreRole=''
        // }
    }
})

export const {setuserDetails}=userSlice.actions
export default userSlice.reducer
