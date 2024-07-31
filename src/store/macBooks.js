import { createSlice } from "@reduxjs/toolkit";
import API from "../api";


const macBooksSlice = createSlice({
    name: "macBooks",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        series: null,
        isLoadingSeries: true,
        color: null,
        isLoadingColor: true
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
        },
        seriesMacBooksRequested: (state) => {
            state.isLoadingSeries = true
        },
        seriesMacBooksReceved: (state, action) => {
            state.series = action.payload
            state.isLoadingSeries = false
        },
        seriesMacBooksField: (state, action) => {
            state.error = action.payload
            state.isLoadingSeries = false
        },
        colorMacBooksRequested: (state) => {
            state.isLoadingColor = true
        },
        colorMacBooksReceved: (state, action) => {
            state.color = action.payload
            state.isLoadingColor = false
        },
        colorMacBooksField: (state, action) => {
            state.error = action.payload
            state.isLoadingColor = false
        },
    }
});

const { reducer: macBooksReducer, actions } = macBooksSlice;

const {
    macBooksRequested,
    macBooksReceved,
    macBooksRequestField,
    seriesMacBooksRequested,
    seriesMacBooksReceved,
    seriesMacBooksField,
    colorMacBooksRequested,
    colorMacBooksReceved,
    colorMacBooksField
} = actions;


export const loadSeriesMacBooks = () => async (dispatch) => {
    dispatch(seriesMacBooksRequested());
    try {
        const data = await API.seriesMacBooks.fetchAll()
        dispatch(seriesMacBooksReceved(data))
    } catch (error) {
        dispatch(seriesMacBooksField(error.message))
    }
};

export const loadColorMacBooks = () => async (dispatch) => {
    dispatch(colorMacBooksRequested());
    try {
        const data = await API.visualAppearanceMacBook.fetchAll()
        dispatch(colorMacBooksReceved(data))
    } catch (error) {
        dispatch(colorMacBooksField(error.message))

    }
};

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


export const getSeriesMacBooks = () => (state) => state.macBooks.series;
export const getSeriesMacBooksLoadingStatus = () => (state) => state.macBooks.isLoadingSeries;

export const getColorMacBooks = () => (state) => state.macBooks.color;
export const getColorMacBooksLoadingStatus = () => (state) => state.macBooks.isLoadingColor;



export default macBooksReducer;