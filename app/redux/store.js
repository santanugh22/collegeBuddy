import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";


const store=configureStore({
    reducer:authSlice
})


export default store