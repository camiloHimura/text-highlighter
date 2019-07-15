import {combineReducers} from "redux";

import colors from "./colorsReducer";
import textList from "./textListReducer";

export default combineReducers({
    colors,
    textList,
})
