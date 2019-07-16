import {ADD_TEXT_LIST, REMOVE_TEXT_LIST, SORT_TEXT_LIST} from "../actions/actions-types";

export default function addLinkReducer(state = {sortAscending: false}, action){
    switch(action.type){
        case ADD_TEXT_LIST:
            const currentItems = state[action.payload.color] || []
            return Object.assign({}, state, {[action.payload.color]: [...currentItems, action.payload.text.trim()]})
            
        case REMOVE_TEXT_LIST:
            const {text, color} = action.payload;
            const items = state[color] || [];
            const finalItems = items.filter(item => item != text)

            return Object.assign({}, state, {[action.payload.color]: [...finalItems]})
        
        case SORT_TEXT_LIST:
        return Object.assign({}, state, {sortAscending: action.payload})

        default: 
            return state;
    }
}