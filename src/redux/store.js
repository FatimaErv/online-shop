import {configureStore, createReducer} from "@reduxjs/toolkit"
import countReducer from "./counter/countSlice"
import wishReducer from "./wishlist/wishSlice"
import cartReducer from "./cart/cartSlice"


const myStore = configureStore({
    reducer:{
        counter: countReducer,
        wishlist: wishReducer,
        cart: cartReducer,

    }

})

export default myStore