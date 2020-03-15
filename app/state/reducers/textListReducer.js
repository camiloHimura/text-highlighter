import {ADD_TEXT_LIST, REMOVE_TEXT_LIST, SORT_TEXT_LIST} from "../actions/actions-types.js";

export default function textListReducer(state = {sortAscending: false}, action){
  switch(action.type){
    case ADD_TEXT_LIST:
      const currentItems = state[action.payload.color] || [];
      if(!isText(action.payload.text)){
        return state;
      }

      return Object.assign({}, state, {[action.payload.color]: [...currentItems, action.payload.text.trim()]})
      
    case REMOVE_TEXT_LIST:
      const {text, color} = action.payload;
      const items = state[color] || [];

      if(!isText(action.payload.text)){
        return state;
      }

      const finalItems = items.filter(item => item != text)

      return Object.assign({}, state, {[action.payload.color]: [...finalItems]})
    
    case SORT_TEXT_LIST:
     return Object.assign({}, state, {sortAscending: action.payload})

    default: 
      return state;
  }
}

const isText = value => (typeof value === 'string' && value !== '');
