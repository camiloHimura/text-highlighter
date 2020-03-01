import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Triangle} from "./styles.js"

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
  
  function changeSort(){
    sortAscendingText(!sortAscending);
  }

  return <div className="sort --flex" onClick={changeSort}>
            Sort <Triangle className={`${sortAscending? "rotate": ""}`}></Triangle>
          </div>
}

Sort.propTypes = {
  sortAscending: PropTypes.bool.isRequired,
  sortAscendingText: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispachToProps)(Sort);
