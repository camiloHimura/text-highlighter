import React from 'react';
import { TextHighlighter } from './TextHighlighter';
import { shallow } from 'enzyme'


describe('Colors component', () => {
  let Component;
  let props;

  beforeEach(() => {
    props = {
      addText: jest.fn(),
      optionSelected: 'red',
      selectHighLighter: 'red',
    }
    Component = shallow(<TextHighlighter {...props}/>);
  })
  it('take snapshot', () => {
    expect(Component).toMatchSnapshot();
  });

  it('highlighting text', () => {
    const data = {value: 'this is a test', selectionStart: 0, selectionEnd:3};
    Component.find('textarea').simulate('select', { target: data});
    const textSlice = data.value.slice(data.selectionStart, data.selectionEnd);
    expect(props.addText).toHaveBeenCalledWith(textSlice, props.selectHighLighter);
  });
})
