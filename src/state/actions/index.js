import {SELECT_HIGHLIGHTER_COLOR, SELECT_FILTER_COLOR, ADD_TEXT_LIST, REMOVE_TEXT_LIST} from "./actions-types";

export function selectHighLighterColorAction(payload) {
    return {type: SELECT_HIGHLIGHTER_COLOR, payload}
}

export function selectFilterColorAction(payload) {
    return {type: SELECT_FILTER_COLOR, payload}
}

export function addTextAction(payload) {
    return {type: ADD_TEXT_LIST, payload}
}

export function removeTextAction(payload) {
    return {type: REMOVE_TEXT_LIST, payload}
}
