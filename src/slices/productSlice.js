import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setProducts: (state, action) => {state.products = action.payload},
        addProduct: (state, action) => {state.products = state.products.map(x => x.id === action.payload ? ({...x, selected: x.selected + 1}) : x)},
        removeProduct: (state, action) => {state.products = state.products.map(x => x.id === action.payload ? ({...x, selected: x.selected > 0 ? x.selected - 1 : 0}) : x)},
        removeAllProducts: (state, action) => {state.products = state.products.map(x => x.id === action.payload ? ({...x, selected: 0}) : x)},
    }
})

export const {setProducts, addProduct, removeProduct, removeAllProducts} = navSlice.actions

export const selectProducts = (state) => state.navProducts.products;

export default navSlice.reducer