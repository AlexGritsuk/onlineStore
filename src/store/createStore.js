import { combineReducers, configureStore } from "@reduxjs/toolkit";
import iphonesReducer from "./iphones";
import airPodsReducer from "./airPods";
import macBooksReducer from "./macBooks";


const rootReducer = combineReducers({
    iphones: iphonesReducer,
    airPods: airPodsReducer,
    macBooks: macBooksReducer
});


export function createStore() {
    return configureStore({
        reducer: rootReducer,
    })
}