import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice";


const store = configureStore({
    reducer:{
       noOfOpenRequirements:reducer
    },
})

export default store




