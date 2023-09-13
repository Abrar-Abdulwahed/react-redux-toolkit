import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { order as cakeOrder } from "../cake/cakeSlice";

type initialStateType = {
    numberOfIcecreams: number,
}
const initialState: initialStateType = {
    numberOfIcecreams: 20,
}
const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        //directly modify the state object by using the draft parameter.
        order: (state) => {
            state.numberOfIcecreams--;
        },
        //returning a new value instead of modifying the draft state directly
        reFund: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams + action.payload
            };
        }
    },
    //map object notation
    // extraReducers:{
    //     "cake/reFund": (state) => 
    //     {
    //         state.numberOfIcecreams--;
    //     }
    // },

    //builder callback notation(recommended)
    extraReducers: (builder) => {
        builder.addCase(cakeOrder, state => {
            state.numberOfIcecreams -= 2;
        });
    }
})

export const { order, reFund }  = iceCreamSlice.actions
export default iceCreamSlice.reducer