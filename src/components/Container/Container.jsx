import React from 'react';
import {connect} from 'react-redux';
import Board from "../Board";

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

export default connect(mapStateToProps, mapDispachToProps)(Container);