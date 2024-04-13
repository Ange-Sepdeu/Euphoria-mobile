import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';
import {combineReducers} from 'redux';
import savedSlice from "./slices/saved.slice";
import cartSlice from "./slices/cart.slice";
import userSlice from "./slices/user.slice";
import categorySlice from "./slices/category.slice";


const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    user: userSlice,
    cart: cartSlice,
    categories: categorySlice,
    savedProducts: savedSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => [thunk]
})

export const persistor = persistStore(store);