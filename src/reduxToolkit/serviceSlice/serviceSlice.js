import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    menuOpen: false
}

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        toggleMenu: (state, action) => {
            state.menuOpen = !state.menuOpen
        }
    }
})


export const {toggleMenu} = serviceSlice.actions;
export default serviceSlice.reducer;