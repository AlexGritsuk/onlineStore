import { createSlice } from "@reduxjs/toolkit";

const heartSlice = createSlice({
    name: "heart",
    initialState: {
        entities: [],
        count: 0,
    },
    reducers: {
        heartAdd: (state, action) => {
            state.entities.push(action.payload)
        },
        heartRemove: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            )
        }, 
        countHeart: (state) => {
            state.count = state.entities.length
        }
    }
});

const { reducer: heartReducer, actions } = heartSlice;
const { heartAdd, heartRemove } = actions;

export const getHeart = () => (state) => {
    console.log(state.heart.entities);
   return state.heart.entities;
};

export const handleAddHeart = (product) => (dispatch) => {
    dispatch(heartAdd(product))    
};

export const handleDeleteHeart = (id) => (dispatch) => {
    dispatch(heartRemove(id))
};

export const getCountHeart = () => (state) => {
    if (state.heart.entities) {
        console.log(state.heart.entities);
        return state.heart.entities.length;
    };
    return 0;
};

export default heartReducer;