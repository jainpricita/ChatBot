import { configureStore } from "@reduxjs/toolkit";
import validateReducer from "./validationSlice";
export const store =configureStore({
    reducer:{
        validate:validateReducer,
    },
})