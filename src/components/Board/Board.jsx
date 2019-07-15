import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import "./Board.css"

import Colors from "../Colors";
import TextHighlighter from "../TextHighlighter";
import ListFiltered from "../ListFiltered";

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

function Board(props){
    const {selectFilter, selectFilterColorAction, selectHighLighter, selectHighLighterColorAction, colors} = props;

    return  <Fragment>
                <Colors title="HighLighter"
                    options={colors}
                    optionSelected={selectHighLighter}
                    onClick={selectHighLighterColorAction}
                    />
                
                <div className="--clear-20"></div>
                <TextHighlighter
                    optionSelected={selectHighLighter}
                />

                <div className="--clear-20"></div>
                <Colors title="Filter"
                    options={colors}
                    optionSelected={selectFilter}
                    onClick={selectFilterColorAction}
                />

                <div className="--clear-20"></div>
                <ListFiltered
                    selectFilter={selectFilter}
                />
            </Fragment>

}

export default connect(mapStateToProps, mapDispachToProps)(Board) ;