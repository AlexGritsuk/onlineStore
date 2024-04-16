import {createStore, compose, applyMiddleware} from "redux";
import { logger } from "./middleware/logger";
import iphonesReducer from "./iphones";
import airPodsReducer from "./airPods";
import macBooksReducer from "./macBooks";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    iphones: iphonesReducer,
    airPods: airPodsReducer,
    macBooks: macBooksReducer,
    cart: cartReducer,
});

const middlewareEnhancer = applyMiddleware(logger);

function configureStore() {
    return createStore(
        rootReducer, compose(
            middlewareEnhancer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__())
        );
    );
}

export default configureStore;