import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import "./TextHighlighter.css"

import {addTextAction} from "../../state/actions";

const mapStateToProps = state => {
    return {
            selectHighLighter: state.colors.selectHighLighter,
        }
}

const mapDispachToProps = dispatch => {
    return {
        addText: (text, color) => dispatch(addTextAction({text, color})),
    }
}

function TextHighlighter(props){
    const {optionSelected = "", selectHighLighter, addText} = props;

    const inputTextarea = useRef();

    function selectedText(event){
        const {target} = event;
        const textSlected = target.value.substring(target.selectionStart, target.selectionEnd);
        addText(textSlected, selectHighLighter);
    }

    const className = `textHighlighter ${optionSelected}`
    return  <div className={className}>
                <textarea autoFocus={true} ref={inputTextarea} onSelect={selectedText}>
                </textarea>
            </div>
}

export default connect(mapStateToProps, mapDispachToProps)(TextHighlighter) ;