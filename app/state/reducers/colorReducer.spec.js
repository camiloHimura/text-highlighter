import colorsReducer from './colorsReducer'
import {selectHighLighterColorAction, selectFilterColorAction} from '../actions'

describe('Links reducer', () => {
  it('return default store', () => {
    const newState = colorsReducer(undefined, {});
    expect(newState).toEqual({options: ['red', 'yellow', 'green'], selectHighLighter: 'red', selectFilter: 'red'})
  })
  
  it('selecting a highlighter color', () => {
    const newState = colorsReducer(undefined, selectHighLighterColorAction('yellow'));
    expect(newState.selectHighLighter).toContain('yellow');
  })
  
  it('selecting filter', () => {
    const newState = colorsReducer(undefined, selectFilterColorAction('green'));
    expect(newState.selectFilter).toContain('green');
  })
})
