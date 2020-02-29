import React, { Fragment } from 'react';
import "./Board.css"

import Colors from "../Colors";
import TextHighlighter from "../TextHighlighter";
import ListFiltered from "../ListFiltered";
import Sort from "../Sort";


export function Board(props){
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
                <div className="--flex --flexBetween">
                    <Colors title="Filter"
                        options={colors}
                        optionSelected={selectFilter}
                        onClick={selectFilterColorAction}
                        />
                    <Sort/>
                </div>

                <div className="--clear-20"></div>
                <ListFiltered
                    selectFilter={selectFilter}
                />
            </Fragment>
}

export default Board;