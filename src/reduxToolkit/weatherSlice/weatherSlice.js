import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getWeather = createAsyncThunk('api.openweathermap.org', async (location) => {
    try{
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        console.log(data)
        return data
    }catch(e){
        console.log(e)
    }
}) 


const initialState = {
    data: {},
    menuOpen: false,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getWeather.pending, (state, action)  => {

        })
        builder.addCase(getWeather.fulfilled, (state, action)  => {
            state.data = action.payload.data
        })
        builder.addCase(getWeather.rejected, (state, action)  => {

        })
    }
})


export default weatherSlice.reducer;