import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,actions)=>{
            console.log(actions.payload);
        }
    }
})

export const {addtoCart}=CartSlice.actions;
export default CartSlice.reducer;