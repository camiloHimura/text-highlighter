import React from 'react';
import { ListFiltered } from './ListFiltered';
import { shallow, mount } from 'enzyme'


describe('ListFiltered component', () => {
  let Component;
  let props;

  beforeEach(() => {
    props = {
      textList: {
        red: ['abc', 'bcd', 'cda']
      },
      selectFilter: 'red', 
      sortAscending: false, 
      removeTextAction: jest.fn()
    }
    Component = mount(<ListFiltered {...props}/>);
  })
  it('take snapshot', () => {
    expect(Component).toMatchSnapshot();
  });
  
  it('list rendered', () => {
    const containers = Component.find('[data-test="contText"]');
    expect(containers).toHaveLength(props.textList[props.selectFilter].length);
    containers.forEach((node, index) => {
      expect(node.find('span').text()).toEqual(props.textList[props.selectFilter][index])
      expect(node.prop('style')).toEqual({"background": props.selectFilter})
    })
  });
  
  it('sorting list Ascending', () => {
    Component.setProps({ sortAscending: true });
    const containers = Component.find('[data-test="contText"]');
    // invertes test's list is 'assending' order
    const ascendingValues = [...props.textList[props.selectFilter]].reverse();
    containers.forEach((node, index) => {
      expect(node.find('span').text()).toEqual(ascendingValues[index])
    })
  });

})