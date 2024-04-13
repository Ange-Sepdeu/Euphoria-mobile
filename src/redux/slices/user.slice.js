import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    _id: null,
    fullName: null,
    email: null,
    token: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setSignOutState: (state, action) => {
            state = initialState;
        },
        setUserLoginState: (state, action) => {
            state._id = action.payload._id;
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.token = action.payload.token;
        }
    }
})

export const {setUserLoginState, setSignOutState} = userSlice.actions;

export const selectUserId = (state) => state.user._id;
export const selectUserEmail = (state) => state.user.email;
export const selectUserName = (state) => state.user.fullName;
export const selectUserToken = (state) => state.user.token;

export default userSlice.reducer;