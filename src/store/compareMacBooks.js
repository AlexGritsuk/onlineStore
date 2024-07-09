import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
    name: "compareMacBooks",
    initialState: {
        entities: [],
        count: 0,
    },
    reducers: {
        compareAddMacBooks: (state, action) => {
            state.entities.push(action.payload)
        },
        compareRemoveMacBooks: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            )
        },
        countCompare: (state) => {
            state.count = state.entities.length
        }
    }
});

const { reducer: compareReducerMacBooks, actions } = compareSlice;
const { compareAddMacBooks, compareRemoveMacBooks } = actions;

export const getCompareMacBooks = () => (state) => {
    return state.compareMacBooks.entities;
}

export const handleAddCompareMacBooks = (product) => (dispatch) => {
    dispatch(compareAddMacBooks(product))
}

export const handleDeleteCompareMacBooks = (id) => (dispatch) => {
    dispatch(compareRemoveMacBooks(id))
}

export const getCountCompareMacBooks = () => (state) => {
    if (state.compareMacBooks.entities) {
        return state.compareMacBooks.entities.length
    }
    return 0;
}

export default compareReducerMacBooks;
