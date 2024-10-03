import { createSlice } from "@reduxjs/toolkit"; 
 
const cartSlice = createSlice({ 
    name:"cart", 
    initialState:{ 
        list:[] 
    }, 
    reducers:{ 
     addCart:(state,action)=>{ 
         
           const findProduct = state.list.find((x) => x.id == action.payload.id)  
           if(!findProduct){ 
 
               state.list.push({...action.payload,quantity:1}) 
           } 
         
         
     } ,
     incQuantity:(state, action) => {

        const findList = state.list.find((x) => x.id==action.payload)
        if(findList) {
            findList.quantity +=1
        }
        
     },
     addQuantity:(state, action) => {

        const findList = state.list.find((x) => x.id==action.payload)
        if(findList.quantity > 1) {
            findList.quantity -=1
        }
        
     }
    } 
}) 
 

export const {addCart, incQuantity, addQuantity} = cartSlice.actions; 

export default cartSlice.reducer