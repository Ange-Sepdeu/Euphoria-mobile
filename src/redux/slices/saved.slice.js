import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    savedProducts: [],
}

const savedProductSlice = createSlice({
    name: "savedProducts",
    initialState,
    reducers: {
        addSaveProduct: (state, action) => {
            state.savedProducts.push(action.payload.data);
        },
        removeSaveProduct: (state, action) => {
            state.savedProducts = state.savedProducts.filter((product) => product._id != action.payload._id);
        }
    }
})

export const {addSaveProduct, removeSaveProduct} = savedProductSlice.actions;

export const getSavedProducts = (state) => state.savedProducts.savedProducts;

export default savedProductSlice.reducer;