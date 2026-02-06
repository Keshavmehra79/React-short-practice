import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CartSlice"
const CartStore=configureStore({
    reducer:{
        mycart:myReducer
    }
})

export default CartStore