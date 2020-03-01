import React from 'react';
import PropTypes from "prop-types";
import {Container, Title} from "./styles.js"

function Colors(props){
  const {options, optionSelected, onClick, title = ''} = props;

  return  <div className="--flex --alignCenter">
              {options.map((color, key) => {
                  const selected = optionSelected === color ? 'selected': '';
                  
                  return <Container key={`${key}-${color}`} 
                            className={selected} 
                            style={{"background": color}}
                            onClick={() => onClick(color)}
                          >
                          </Container>
              })}

              <Title>{title}</Title>
          </div>

}

Colors.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    optionSelected: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Colors ;
