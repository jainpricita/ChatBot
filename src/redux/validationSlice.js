import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  clicked:false,
  user:{
    name:"",
    age:"",
  }
};

const validateSlice = createSlice({
    name: "validate",
    initialState,
    reducers: {
      setClicked:(state)=>{
        state.clicked=!state.clicked;
      },
      addName:(state,action)=>{
         state.user.name=action.payload;
      },
      addAge:(state,action)=>{
        state.user.age=action.payload;
     }
    }
});

export const selected = (state) => state.validate;
export const userSelected=(state)=>state.validate.user;
export const {setClicked,addAge,addName}=validateSlice.actions;
export default validateSlice.reducer;