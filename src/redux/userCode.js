import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: [],
  codeOutput: [],
};

const UserCodeSlice = createSlice({
  name: "userCode",
  initialState,
  reducers: {
    
    AddCode: (state, action) => {
        let id = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 15) {
            id += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
      state.code.push({...action.payload,id:id});
    },
    clearState:(state, action)=>{
        state.code=action.payload || []
    }
  },
});
const { actions, reducer } = UserCodeSlice
export const { AddCode ,clearState} = actions
export default reducer