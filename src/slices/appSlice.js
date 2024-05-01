import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    orientation: 'PORTRAIT',
    hasConnection: false,
    darkMode: false
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrientation: (state, action) => {state.orientation = action.payload},
    }
})

export const {setOrientation} = navSlice.actions

export const selectOrientation = (state) => state.navApp.orientation;

export default navSlice.reducer