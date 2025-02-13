import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'; // Importing authSlice


const store = configureStore({
    reducer: {
        auth: authSlice.reducer, // Adding authSlice reducer
    }
});


export default store;
