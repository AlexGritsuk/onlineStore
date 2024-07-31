import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
    name: "compare",
    initialState: {
        entities: [],
        count: 0,
    }, 
    reducers: {
        compareAdd: (state, action) => {
            state.entities.push(action.payload)
        },
        compareRemove: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            )
        },
        countCompare: (state) => {
            state.count = state.entities.length
        }
    }
});

const { reducer: compareReducer, actions } = compareSlice;
const { compareAdd, compareRemove } = actions;

export const getCompare = () => (state) => {    
    return state.compare.entities;
};

export const handleAddCompare = (product) => (dispatch) => {
    dispatch(compareAdd(product))

};

export const handleDeleteCompare = (id) => (dispatch) => {
    dispatch(compareRemove(id))
};

export const getCountCompare = () => (state) => {
    if (state.compare.entities) {
        return state.compare.entities.length;
    };
    return 0;
};

export default compareReducer;