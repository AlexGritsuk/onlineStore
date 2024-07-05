import { combineReducers, configureStore } from "@reduxjs/toolkit";
import iphonesReducer from "./iphones";
import airPodsReducer from "./airPods";
import macBooksReducer from "./macBooks";
import cartReducer from "./cart";
import { thunk } from "./middleware/thunk";
import heartReducer from "./heart";
import compareReducer from "./compare";
import compareReducerAirPods from "./compareAirPods";



const rootReducer = combineReducers({
    iphones: iphonesReducer,
    airPods: airPodsReducer,
    macBooks: macBooksReducer,
    cart: cartReducer,
    heart: heartReducer,
    compare: compareReducer,
    compareAirPods: compareReducerAirPods,
});


export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
        devTools: process.env.NODE_ENV !== 'production'
    })
}