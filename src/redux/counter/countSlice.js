import { createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({
    name:"counter",
    initialState:{
        value: 0,
        valueCart:0
    },
    reducers:{
        addCount: (state) => {
            state.value += 1
           
        },
        minusCount: (state) => {
            if(state.value>0) {
                state.value -= 1
            }
        },
           addCart: (state) => {
            state.valueCart += 1
           
        },
        minusCart: (state) => {
            if(state.valueCart>0) {
                state.valueCart -= 1

            }
        },

    }
})

export const {addCount} = countSlice.actions
export const {minusCount} = countSlice.actions
export const {addCartss} = countSlice.actions
export const {minusCart} = countSlice.actions

export default countSlice.reducer