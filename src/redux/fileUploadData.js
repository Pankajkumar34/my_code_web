import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    ZipFile:[],
  };

  const fileUploadSlice=createSlice({
    name:"fileUploadData",
    initialState,
    reducers:{
        fileAdd:(state,action)=>{
          console.log(action.payload,"llllllll")
            state.ZipFile.push({data:action.payload})
        }
    }
  })

  const {reducer,actions}=fileUploadSlice

  export const {fileAdd}=actions
  export default reducer