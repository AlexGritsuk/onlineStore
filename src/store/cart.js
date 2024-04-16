import { createAction, createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: [],
        count: 0,
    },
    reducers: {
        basket: (state, action) => {
            state.entities = action.payload
        },
        basketAdd: (state, action) => {
            state.entities.push(action.payload)
        },
        basketRemove: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            )
        },
        countProduct: (state, actions) => {
            state.count = state.entities.length
        }
    }
});

const { reducer: cartReducer, actions } = cartSlice;

const { basket, basketAdd, basketRemove } = actions;

const addProductCart = createAction("cart/addProductCart");
const removeProductCart = createAction("cart/removeProductCart");


// export const getLoadCart = () => (dispatch) => {
//     const cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
//     if (cartProducts) {
//         dispatch(basket(cartProducts))
//     }
// }

// export const setLoadCart = () => (state) => {
//     setTimeout(() => {
//         localStorage.setItem("cartProducts", JSON.stringify(basket(state.cart.entities)));
//     }, 1)
// }


export const gethandleAddCartProducts = (product) => (dispatch, getState) => {
    dispatch(basketAdd(product))
}



export const gethandleDeleteCartProducts = (id) => (dispatch) => {
    // dispatch(removeProductCart())
    dispatch(basketRemove(id))
}

export const getCart = () => (state) => state.cart.entities;

export const getCountCart = () => (state) => {
    if (state.cart.entities) {
        return state.cart.entities.length
    }
    return 0;
}





export default cartReducer;