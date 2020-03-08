import React from 'react';
import Colors from './Colors';
import { shallow } from 'enzyme'


describe('Colors component', () => {
  let Component;
  let props;

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      title: 'title test',
      options: ['blue', 'red', 'green'],
      optionSelected: 'optionSelected test',
    }
    Component = shallow(<Colors {...props}/>);
  })
  it('take snapshot', () => {
    expect(Component).toMatchSnapshot();
  });

  it('color rendered', () => {
    expect(Component.find('[data-test="color"]')).toHaveLength(props.options.length);
  });

  it('color applied', () => {
    Component.find('[data-test="color"]').forEach((node, index) => {
      expect(node.prop('style')).toEqual({"background": props.options[index]});
    })
  });

  it('color clicked', () => {
    const index = 0;
    Component.find('[data-test="color"]').at(index).prop('onClick')();
    expect(props.onClick).toHaveBeenCalledWith(props.options[index]);
  });


})