import React from 'react';
import PropTypes from "prop-types";
import {Container, Title} from "./styles.js"

function Colors(props){
  const {options, optionSelected, onClick, title = ''} = props;

  return  <div data-test='container' className="--flex --alignCenter">
              {options.map((color, key) => {
                  const selected = optionSelected === color ? 'selected': '';
                  
                  return <Container 
                            data-test='color'
                            className={selected}
                            key={`${key}-${color}`} 
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
