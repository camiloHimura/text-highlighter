import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Container} from "./styles.js"

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

export function TextHighlighter(props){
  const {optionSelected = "", selectHighLighter, addText} = props;
  const inputTextarea = useRef();

  function selectedText(event){
    const {target} = event;
    const textSlected = target.value.substring(target.selectionStart, target.selectionEnd);
    addText(textSlected, selectHighLighter);
  }

  return  <Container className={optionSelected}>
            <textarea autoFocus={true} ref={inputTextarea} onSelect={selectedText}>
            </textarea>
          </Container>
}

TextHighlighter.propTypes = {
  optionSelected: PropTypes.string,
  selectHighLighter: PropTypes.string,
  addText: PropTypes.func,
}

export default connect(mapStateToProps, mapDispachToProps)(TextHighlighter);
