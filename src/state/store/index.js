import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import {validationMiddleware} from "../middleware"

const store = createStore(
    rootReducer,
    applyMiddleware(validationMiddleware)
);

export default store;
