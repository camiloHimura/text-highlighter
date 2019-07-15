
import {ADD_TEXT_LIST} from "../actions/actions-types";

export default function validationMiddleware({ dispatch, getState}){
    return function(next){
        return function(action){
            if(action.type === ADD_TEXT_LIST){
                const {textList} = getState();
                const isShort = action.payload.text.length < 2;
                const items = textList[action.payload.color] || [];
                const isRepetitive = items.some(text => text == action.payload.text);
                
                if(isShort || isRepetitive){return}
            }
            return next(action);
        }
    }
}