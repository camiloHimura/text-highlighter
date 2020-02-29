import {combineReducers} from "redux";

import colors from "./colorsReducer.js";
import textList from "./textListReducer.js";

export default combineReducers({
    colors,
    textList,
})
