import { combineReducers, configureStore } from "@reduxjs/toolkit";
import iphonesReducer from "./iphones";
import airPodsReducer from "./airPods";


const rootReducer = combineReducers({ iphones: iphonesReducer, airPods: airPodsReducer });


export function createStore() {
    return configureStore({
        reducer: rootReducer,
    })
}