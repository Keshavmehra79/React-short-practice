import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "mycart",
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, actions) => {
            const cartval = state.cart.filter((key) => key.id == actions.payload.id);
            if (cartval.length >= 1) {
                alert("Item has Already Added in cart...");
            }
            else {
                state.cart.push(actions.payload);
            }
        },

        quntyInc: (state, actions) => {
            for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == actions.payload.id) {
                    state.cart[i].qunty++;
                }
            }

        },

        quntyDec: (state, actions) => {
            for (var i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == actions.payload.id) {
                    if (state.cart[i].qunty <= 1) {
                        return
                    }
                    state.cart[i].qunty--;

                }
            }
        },

        removeCart:(state,actions)=>{
            state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
        }
    }
})

export const { addtoCart, quntyInc, quntyDec,removeCart } = CartSlice.actions;
export default CartSlice.reducer