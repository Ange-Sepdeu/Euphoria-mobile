import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartProducts: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            state.cartProducts.push(action.payload.data);
        },
        removeCartItem: (state, action) => {
            state.cartProducts = state.cartProducts.filter((cartProduct) => cartProduct._id != action.payload._id);
        },
        modifyCartItem: (state, action) => {
            state.cartProducts.forEach(product => {
                if (product._id === action.payload.product._id)
                    {
                        product = action.payload.product;
                    }
            })
        }
    }
})

export const {addCartItem, removeCartItem, modifyCartItem} = cartSlice.actions;
export const getCartProducts = (state) =>state.cart.cartProducts;

export default cartSlice.reducer;