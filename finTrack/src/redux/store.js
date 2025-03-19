import {configureStore} from '@reduxjs/toolkit'
import authSliceReducers from './authSlice'
import collectionReducers from './collectionSlice';

const store = configureStore({
    reducer: {
        auth: authSliceReducers,
        collection: collectionReducers,
    }
});

export default store;