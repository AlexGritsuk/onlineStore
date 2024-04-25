import { combineReducers, configureStore } from "@reduxjs/toolkit";

import iphonesReducer from "./iphones";
import airPodsReducer from "./airPods";
import macBooksReducer from "./macBooks";
import cartReducer from "./cart";
import { logger } from "./middleware/logger";
import { thunk } from "./middleware/thunk";
import heartReducer from "./heart";
import compareReducer from "./compare";



const rootReducer = combineReducers({
    iphones: iphonesReducer,
    airPods: airPodsReducer,
    macBooks: macBooksReducer,
    cart: cartReducer,
    heart: heartReducer,
    compare: compareReducer,
});


export function createStore() {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
        devTools: process.env.NODE_ENV !== 'production'
    })
}