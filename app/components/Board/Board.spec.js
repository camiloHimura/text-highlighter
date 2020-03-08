import React from 'react';
import Board from './Board';
import Colors from '../Colors';
import ListFiltered from '../ListFiltered';
import TextHighlighter from '../TextHighlighter';
import { shallow } from 'enzyme'


describe('Board component', () => {
  let Component;
  let props;

  beforeEach(() => {
    props = {
      colors: ['blue', 'red', 'green'],
      selectFilter: 'selectFilter test',
      selectHighLighter: 'selectHighLighter test',
      selectFilterColorAction: jest.fn(),
      selectHighLighterColorAction: jest.fn(),
    }
    Component = shallow(<Board {...props}/>);
  })
  it('take snapshot', () => {
    expect(Component).toMatchSnapshot();
  });

  it('has Colors', () => {
    expect(Component.find(Colors)).toHaveLength(2);
  });

  it('check first Colors props', () => {
    const Color = Component.find(Colors).first()
    const {options, optionSelected} = Color.props();
    Color.prop('onClick')();

    expect(options).toEqual(props.colors);
    expect(optionSelected).toEqual(props.selectHighLighter);
    expect(props.selectHighLighterColorAction).toHaveBeenCalled();
  });

  it('check second Colors props', () => {
    const Color = Component.find(Colors).at(1)
    const {options, optionSelected} = Color.props();
    Color.prop('onClick')();

    expect(options).toEqual(props.colors);
    expect(optionSelected).toEqual(props.selectFilter);
    expect(props.selectFilterColorAction).toHaveBeenCalled();
  });

  it('has TextHighlighter', () => {
    expect(Component.find(TextHighlighter)).toHaveLength(1);
  });

  it('check TextHighlighter props', () => {
    expect(Component.find(TextHighlighter).props().optionSelected).toBe(props.selectHighLighter);
  });

  it('has ListFiltered', () => {
    expect(Component.find(ListFiltered)).toHaveLength(1);
  });

  it('check ListFiltered props', () => {
    expect(Component.find(ListFiltered).props().selectFilter).toBe(props.selectFilter);
  });

})