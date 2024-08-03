import { configureStore } from "@reduxjs/toolkit";
import UserCodeSlice from './userCode'
const store=configureStore({
    reducer:{
        userCode:UserCodeSlice
    }
})

export {store}