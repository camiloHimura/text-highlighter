import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import "./ListFiltered.css"

import {removeTextAction} from "../../state/actions";

const mapStateToProps = state => {
    return {
            textList: state.textList,
            sortAscending: state.textList.sortAscending,
        }            
}

const mapDispachToProps = dispatch => {
    return {
        removeTextAction: (text, color) => dispatch(removeTextAction({text, color})),
    }
}

function ListFiltered(props) {
    const {textList, selectFilter, sortAscending, removeTextAction} = props;
    let finalList = textList[selectFilter] || [];

    useEffect(() => {
        finalList = finalList.sort(sortBy(sortAscending))
        
    }, [finalList.length, sortAscending]);

    function sortBy(isAsending){
        return (a, b) => {
            a = a.toLocaleLowerCase();
            b = b.toLocaleLowerCase();

            if (a > b) { return isAsending ? -1: 1 }
            if (b > a) { return isAsending ? 1 : -1 }
            return 0;
        }
    }

    function removeText(text, color){
        removeTextAction(text, color)
    }

    return  <div className="listFiltered">
                {finalList.map((info, key) => {
                            return <div key={`${key}-${info}${selectFilter}`}style={{"background": selectFilter}}>
                                        <span>{info}</span>
                                        <button className="close" onClick={() => removeText(info, selectFilter)}>x</button>
                                    </div>
                        })
                }
            </div>

}

ListFiltered.propTypes = {
    textList: PropTypes.shape({
        sortAscending: PropTypes.bool.isRequired
    }),
    selectFilter: PropTypes.string.isRequired, 
    sortAscending: PropTypes.bool.isRequired, 
    removeTextAction: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispachToProps)(ListFiltered);
