import React from 'react';
import PropTypes from "prop-types";
import "./Colors.css"

function Colors(props){
    const {options, optionSelected, onClick, title = ''} = props;

    return  <div className="colorsContainer --flex --alignCenter">
                {options.map((color, key) => {
                    const selected = optionSelected === color ? 'selected': '';

                    return <div key={`${key}-${color}`} 
                                className={selected} 
                                style={{"background": color}}
                                onClick={() => onClick(color)}
                            >
                            </div>
                })}

                <h2>{title}</h2>
            </div>

}

Colors.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    optionSelected: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Colors ;
