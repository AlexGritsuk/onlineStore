import { createSlice } from "@reduxjs/toolkit";
import API from "../api";


const macBooksSlice = createSlice({
    name: "macBooks",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        macBooksRequested: (state) => {
            state.isLoading = true
        },
        macBooksReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        macBooksRequestField: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
});

const { reducer: macBooksReducer, actions } = macBooksSlice;

const { macBooksRequested, macBooksReceved, macBooksRequestField } = actions;

export const loadMacBooksList = () => async (dispatch) => {
    dispatch(macBooksRequested());

    try {
        const data = await API.macBooks.fetchAll()
        dispatch(macBooksReceved(data))
    } catch (error) {
        dispatch(macBooksRequestField(error.message))
    }
};

export const getMacBooks = () => (state) => state.macBooks.entities;
export const getMacBooksLoadingStatus = () => (state) => state.macBooks.isLoading;

export const getMacBooksById = (macBooksId) => (state) => {
    if (state.macBooks.entities) {
        return state.macBooks.entities.find((macBook) => macBook._id === macBooksId)
    }
}

export default macBooksReducer;