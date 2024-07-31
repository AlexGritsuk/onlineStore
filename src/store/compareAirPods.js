import { createSlice } from "@reduxjs/toolkit";

const compareSlice = createSlice({
    name: "compareAirPods",
    initialState: {
        entities: [],
        count: 0,
    },
    reducers: {
        compareAddAirPods: (state, action) => {
            state.entities.push(action.payload)
        },
        compareRemoveAirPods: (state, action) => {
            state.entities = state.entities.filter(
                (c) => c._id !== action.payload
            )
        },
        countCompare: (state) => {
            state.count = state.entities.length
        }
    }
});

const { reducer: compareReducerAirPods, actions } = compareSlice;
const { compareAddAirPods, compareRemoveAirPods } = actions;

export const getCompareAirPods = () => (state) => {
    return state.compareAirPods.entities;
}

export const handleAddCompareAirPods = (product) => (dispatch) => {
    dispatch(compareAddAirPods(product))
}

export const handleDeleteCompareAirPods = (id) => (dispatch) => {
    dispatch(compareRemoveAirPods(id))
}

export const getCountCompareAirPods = () => (state) => {
    if (state.compareAirPods.entities) {
        return state.compareAirPods.entities.length
    }
    return 0;
}

export default compareReducerAirPods;

