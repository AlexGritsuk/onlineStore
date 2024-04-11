import { createAction, createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: null,
    },
    reducers: {
        basket: (state, action) => {
            state.entities = action.payload
        },
        basketAdd: (state, action) => {
            state.entities = [action.payload]
        },
        basketRemove: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            )
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


export const handleAddCartProducts = (product) => (dispatch) => {
    dispatch(addProductCart(product));
    const cart = [...product];
    dispatch(basketAdd(cart))
}


export const handleDeleteCartProducts = (id) => (dispatch) => {
    dispatch(removeProductCart())
    dispatch(basketRemove(id))
}



export default cartReducer;