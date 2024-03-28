import { createSlice } from "@reduxjs/toolkit";
import API from "../api";


const iphonesSlice = createSlice({
    name: "iphones",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
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
        }
    }
});

const { reducer: iphonesReducer, actions } = iphonesSlice;
const { iphonesRequested, iphonesReceved, iphonesRequestFiled } = actions


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

export default iphonesReducer;