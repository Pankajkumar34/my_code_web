import { configureStore } from "@reduxjs/toolkit";
import UserCodeSlice from './userCode'
import FileUpload from './fileUploadData'
const store=configureStore({
    reducer:{
        userCode:UserCodeSlice,
        fileUpload:FileUpload
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['fileUploadData/fileAdd'], 
            },
        }),

})

export {store}