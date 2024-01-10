import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import petSlice from "./petSlice";


export const store=configureStore({
    reducer:{
        user:userSlice,
        pet:petSlice
    }
})