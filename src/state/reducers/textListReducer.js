import {ADD_TEXT_LIST, REMOVE_TEXT_LIST} from "../actions/actions-types";

export default function addLinkReducer(state = {}, action){
    console.log("addLinkReducer")
    console.log(action)
    switch(action.type){
        case ADD_TEXT_LIST:
            const currentItems = state[action.payload.color] || []
            return Object.assign({}, state, {[action.payload.color]: [...currentItems, action.payload.text]})
            
        case REMOVE_TEXT_LIST:
            const {text, color} = action.payload;
            return state.filter(item => item.text != text && item.color != color)

        default: 
            return state;
    }
}