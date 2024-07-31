import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: [],
        count: 0,
    },
    reducers: {               
        basketAdd: (state, action) => {
            state.entities.push(action.payload)
        },
        basketRemove: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            )
        },
        countProduct: (state) => {
            state.count = state.entities.length
        }
    }
});



const { reducer: cartReducer, actions } = cartSlice;
const { basketAdd, basketRemove } = actions;

export const getCart = () => (state) => {   
   return state.cart.entities
};

export const gethandleAddCartProducts = (product) => (dispatch, state) => {
    dispatch(basketAdd(product));   
};

export const gethandleDeleteCartProducts = (id) => (dispatch) => {    
    dispatch(basketRemove(id));
};

export const getCountCart = () => (state) => {
    if (state.cart.entities) {
        return state.cart.entities.length;
    };
    return 0;
};

export default cartReducer;