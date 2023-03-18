import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice/weatherSlice";
import serviceSlice from "./serviceSlice/serviceSlice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        service: serviceSlice
    }
})