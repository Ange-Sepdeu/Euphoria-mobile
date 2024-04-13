import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../axiosInstance/axiosInstance";


const initialState = {
    categories: null,
    status: null
}

export const getCategories = createAsyncThunk(
    "category/getCategories", async(_, thunkAPI) => {
        const url = "/api/categories/getCategories";
        try {
            const response = await axiosInstance.get(url);
            return response.data;
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending)
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload.data;
            state.status = "success";
        })
        .addCase(getCategories.rejected, (state, action) => {
            console.log("Rejected :", action);
            state.status = "An error occured";
        })
    }
})

export const selectCategories = (state) => state.categories.categories;

export default categorySlice.reducer;