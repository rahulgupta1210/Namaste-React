import { createSlice,current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    redcucers:{

        //mutating te state here 
        addItem :(state,action)=>{
            state.items.push(action.payload);
        },

        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // console.log(state);
            // console.log(current(state));
            // state =[];//local copy
            // console.log(state);

            //state = ['akshay']; //this will not work,it is not mutating but just adding the refreneces
            //state is a local var and it will not work
            //RTK says mutate the state or return the new state
            state.items.length = 0; //or return {items:[]};//will replace the state
            //the ne wobj ll be replaced inside original state
        }
    }
});
export const {addItem,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;