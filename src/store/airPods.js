import { createSlice } from "@reduxjs/toolkit";
import API from "../api";


const airPodsSlice = createSlice({
    name: "airPods",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
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
        }
    }
});

const { reducer: airPodsReducer, actions } = airPodsSlice;

const { airPodsRequested, airPodsReceved, airPodsRequestField } = actions;

export const loadAirPodsList = () => async (dispatch) => {
    dispatch(airPodsRequested());

    try {
        const data = await API.airPods.fetchAll();
        dispatch(airPodsReceved(data))
    } catch (error) {
        dispatch(airPodsRequestField(error.message))
    }
}

export const getAirPods = () => (state) => state.airPods.entities;
export const getAirPodsLoadingStatus = () => (state) => state.airPods.isLoading


export default airPodsReducer;