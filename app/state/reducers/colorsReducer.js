import {SELECT_HIGHLIGHTER_COLOR, SELECT_FILTER_COLOR} from "../actions/actions-types.js";

const InitialState = {options: ["red", "yellow", "green"], selectHighLighter: "red", selectFilter: "red"};

export default function colorsReducer(state = InitialState, action){
  switch(action.type){
    case SELECT_HIGHLIGHTER_COLOR:
      return Object.assign({}, state, {selectHighLighter: action.payload}) 
    
    case SELECT_FILTER_COLOR:
      return Object.assign({}, state, {selectFilter: action.payload}) 

    default: 
        return state;
  }
}