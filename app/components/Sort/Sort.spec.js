import React from 'react';
import { Sort } from './Sort';
import { shallow } from 'enzyme'


describe('Colors component', () => {
  let Component;
  let props;

  beforeEach(() => {
    props = {
      sortAscending: false, 
      sortAscendingText: jest.fn(),
    }
    Component = shallow(<Sort {...props}/>);
  })
  it('take snapshot', () => {
    expect(Component).toMatchSnapshot();
  });

  it('changing sort value', () => {
    Component.find('div').simulate('click');
    expect(props.sortAscendingText).toHaveBeenCalledWith(!props.sortAscending);
  });


})