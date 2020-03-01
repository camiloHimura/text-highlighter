import React from 'react';
import Board from "../Board";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {selectHighLighterColorAction, selectFilterColorAction} from "../../state/actions";

const mapStateToProps = state => {
    return {
            colors: state.colors.options,
            selectFilter: state.colors.selectFilter,
            selectHighLighter: state.colors.selectHighLighter,
        }
}

const mapDispachToProps = dispatch => {
    return {
        selectHighLighterColorAction: info => dispatch(selectHighLighterColorAction(info)),
        selectFilterColorAction: info => dispatch(selectFilterColorAction(info)),
    }
}

function Container(props){
    return  <Board {...props}/>
}

Board.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectFilter: PropTypes.string.isRequired,
    selectHighLighter: PropTypes.string.isRequired,
    selectHighLighterColorAction: PropTypes.func.isRequired,
    selectFilterColorAction: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispachToProps)(Container);
