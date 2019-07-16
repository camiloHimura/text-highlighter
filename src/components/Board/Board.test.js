import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

console.log(Board);

function setup() {
    const props = {
        selectFilter: jest.fn(),
        selectFilterColorAction: jest.fn(),
        selectHighLighter: jest.fn(),
        selectHighLighterColorAction: jest.fn(),
        colors: jest.fn()
    }
  
    const enzymeWrapper = shallow(<Board {...props} />)
  
    return {
        props,
        enzymeWrapper
    }
}


it('render Board', () => {
    const { enzymeWrapper } = setup()
    console.log(enzymeWrapper)
});
