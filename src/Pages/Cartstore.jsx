import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CartSlice"
const Cartstore=configureStore(
        {
            reducer:{
                mycart:myReducer
            }
        }    
)

export default Cartstore