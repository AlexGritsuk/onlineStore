import { createAction, createSlice } from "@reduxjs/toolkit";
import API from "../api";
import { create } from "lodash";


const airPodsSlice = createSlice({
    name: "airPods",
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
        airPodsRequested: (state) => {
            state.isLoading = true
        },
        airPodsReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        airPodsRequestField: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        seriesAirpodsRequested: (state) => {
            state.isLoadingSeries = true
        },
        seriesAirpodsReceved: (state, action) => {
            state.series = action.payload
            state.isLoadingSeries = false
        },
        seriesAirpodsField: (state, action) => {
            state.error = action.payload
            state.isLoadingSeries = false
        },
        colorAirPodsRequested: (state) => {
            state.isLoadingColor = true
        },
        colorAirPodsReceved: (state, action) => {
            state.color = action.payload
            state.isLoadingColor = false
        },
        colorAirpodsField: (state, action) => {
            state.error = action.payload
            state.isLoadingColor = false
        },

    }
});

const { reducer: airPodsReducer, actions } = airPodsSlice;

const {
    airPodsRequested,
    airPodsReceved,
    airPodsRequestField,
    seriesAirpodsRequested,
    seriesAirpodsReceved,
    seriesAirpodsField,
    colorAirPodsRequested,
    colorAirPodsReceved,
    colorAirpodsField
} = actions;


export const loadSeriesAirPods = () => async (dispatch) => {
    dispatch(seriesAirpodsRequested());
    try {
        const data = await API.seriesAirPods.fetchAll()
        dispatch(seriesAirpodsReceved(data))
    } catch (error) {
        dispatch(seriesAirpodsField(error.message))
    }
};

export const loadColorAirPods = () => async (dispatch) => {
    dispatch(colorAirPodsRequested());
    try {
        const data = await API.visualAppearanceAirPods.fetchAll()
        dispatch(colorAirPodsReceved(data))
    } catch (error) {
        dispatch(colorAirpodsField(error.message))

    }
};


export const loadAirPodsList = () => async (dispatch) => {
    dispatch(airPodsRequested());

    try {
        const data = await API.airPods.fetchAll();
        dispatch(airPodsReceved(data))
    } catch (error) {
        dispatch(airPodsRequestField(error.message))
    }
};

export const getAirPods = () => (state) => state.airPods.entities;
export const getAirPodsLoadingStatus = () => (state) => state.airPods.isLoading;

export const getAirPodsById = (airPodsId) => (state) => {
    if (state.airPods.entities) {
        return state.airPods.entities.find((airPod) => airPod._id === airPodsId)
    }
};

export const getSeriesAirPods = () => (state) => state.airPods.series;
export const getSeriesAirPodsLoadingStatus = () => (state) => state.airPods.isLoadingSeries;

export const getColorAirPods = () => (state) => state.airPods.color;
export const getColorAirPodsLoadingStatus = () => (state) => state.airPods.isLoadingColor;



export default airPodsReducer;