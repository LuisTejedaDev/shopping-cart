import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import {appSlice, productSlice} from './slices';
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        navApp: appSlice,
        navProducts: productSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
}, applyMiddleware(thunk))