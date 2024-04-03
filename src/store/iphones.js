import { createSlice } from "@reduxjs/toolkit";
import API from "../api";


const iphonesSlice = createSlice({
    name: "iphones",
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
        iphonesRequested: (state) => {
            state.isLoading = true
        },
        iphonesReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        iphonesRequestFiled: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        seriesIphonesRequested: (state) => {
            state.isLoadingSeries = true
        },
        seriesIphonesReceved: (state, action) => {
            state.series = action.payload
            state.isLoadingSeries = false
        },
        seriesIphonesField: (state, action) => {
            state.error = action.payload
            state.isLoadingSeries = false
        },
        colorIphonesRequested: (state) => {
            state.isLoadingColor = true
        },
        colorIphonesReceved: (state, action) => {
            state.color = action.payload
            state.isLoadingColor = false
        },
        colorIphonesField: (state, action) => {
            state.error = action.payload
            state.isLoadingColor = false
        },
    }
});

const { reducer: iphonesReducer, actions } = iphonesSlice;
const {
    iphonesRequested,
    iphonesReceved,
    iphonesRequestFiled,
    seriesIphonesRequested,
    seriesIphonesReceved,
    seriesIphonesField,
    colorIphonesRequested,
    colorIphonesReceved,
    colorIphonesField
} = actions

export const loadSeriesIphones = () => async (dispatch) => {
    dispatch(seriesIphonesRequested());
    try {
        const data = await API.seriesIphone.fetchAll()
        dispatch(seriesIphonesReceved(data))
    } catch (error) {
        dispatch(seriesIphonesField(error.message))
    }
};

export const loadColorIphones = () => async (dispatch) => {
    dispatch(colorIphonesRequested());
    try {
        const data = await API.visualAppearance.fetchAll()
        dispatch(colorIphonesReceved(data))
    } catch (error) {
        dispatch(colorIphonesField(error.message))

    }
};


export const loadIphonesList = () => async (dispatch) => {
    dispatch(iphonesRequested())
    try {
        const data = await API.iphones.fetchAll();
        dispatch(iphonesReceved(data))
    } catch (error) {
        dispatch(iphonesRequestFiled(error.message))
    }
}



export const getIphones = () => (state) => state.iphones.entities;
export const getIphonesLoadingStatus = () => (state) => state.iphones.isLoading;

export const getIphoneById = (iphoneId) => (state) => {
    if (state.iphones.entities) {
        return state.iphones.entities.find((iphone) => iphone._id === iphoneId)
    }
};

export const getSeriesIphones = () => (state) => state.iphones.series;
export const getSeriesIphonesLoadingStatus = () => (state) => state.iphones.isLoadingSeries;

export const getColorIphones = () => (state) => state.iphones.color;
export const getColorIphonesLoadingStatus = () => (state) => state.iphones.isLoadingColor;

export default iphonesReducer;