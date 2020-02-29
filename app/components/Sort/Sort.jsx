import React from 'react';
import {connect} from 'react-redux';
import "./Sort.css"

import {sortAscendingTextAction} from "../../state/actions";

const mapStateToProps = state => {
    return {
            sortAscending: state.textList.sortAscending,
        }
}

const mapDispachToProps = dispatch => {
    return {
        sortAscendingText: info => dispatch(sortAscendingTextAction(info)),
    }
}


function Sort(props){
    const {sortAscendingText, sortAscending} = props;
    const className = sortAscending? "triangle rotate": "triangle";
    
    function changeSort(){
        sortAscendingText(!sortAscending);
    }

    return <div className="sort" onClick={changeSort}>
                Sort <span className={className}></span>
            </div>
}

export default connect(mapStateToProps, mapDispachToProps)(Sort);