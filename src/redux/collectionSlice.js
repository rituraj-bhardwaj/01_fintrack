import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        makeCollection: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        removeCollection: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {makeCollection, removeCollection} = collectionSlice.actions; 
export default collectionSlice.reducer;