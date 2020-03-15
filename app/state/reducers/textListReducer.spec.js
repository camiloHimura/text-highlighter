import textListReducer from './textListReducer'
import {addTextAction, removeTextAction, sortAscendingTextAction} from '../actions'

describe('Links reducer', () => {
  it('return default store', () => {
    const newState = textListReducer(undefined, {});
    expect(newState).toEqual({sortAscending: false})
  })
  
  it('adding text', () => {
    const color = 'yellow';
    const text = 'this is a color test';
    const textTwo = 'this is a color textTwo';
    let newState = textListReducer(undefined, addTextAction({text, color}));
    newState = textListReducer(newState, addTextAction({text: textTwo, color}));

    expect(newState[color]).toContain(text);
    expect(newState[color]).toContain(textTwo);
  })

  it('info (text) added is an string', () => {
    let newState = textListReducer(undefined, addTextAction({text: null, color: 'yellow'}));
    expect(newState['yellow']).toBeFalsy();
    
    textListReducer(newState, addTextAction({text: false, color: 'yellow'}));
    expect(newState['yellow']).toBeFalsy();
    
    textListReducer(newState, addTextAction({text: {}, color: 'yellow'}));
    expect(newState['yellow']).toBeFalsy();
    
    textListReducer(newState, addTextAction({text: 123, color: 'yellow'}));
    expect(newState['yellow']).toBeFalsy();
    
    textListReducer(newState, addTextAction({text: '', color: 'yellow'}));
    expect(newState['yellow']).toBeFalsy();
  })

  it('removing not existing text list', () => {
    const color = 'red';
    const initialState = {[color]: ['this is a text one', 'this is a text two', 'this is a text three']}
    let newState = textListReducer(initialState, removeTextAction({text: 'Im a ghost', color: 'red'}));
    expect(newState[color]).toEqual(initialState[color]);
  })

  it('removing unvalid (not a text) item', () => {
    const color = 'red';
    const initialState = {[color]: ['this is a text one', 'this is a text two', 'this is a text three']}
    let newState = textListReducer(initialState, removeTextAction({text: false, color: 'red'}));
    expect(newState[color]).toEqual(initialState[color]);
    
    newState = textListReducer(initialState, removeTextAction({text: {}, color: 'red'}));
    expect(newState[color]).toEqual(initialState[color]);

    newState = textListReducer(initialState, removeTextAction({text: '', color: 'red'}));
    expect(newState[color]).toEqual(initialState[color]);
  })

  it('removing an item', () => {
    const color = 'red';
    const initialState = {[color]: ['this is a text one', 'this is a text two', 'this is a text three']}
    let newState = textListReducer(initialState, removeTextAction({text: 'this is a text one', color: 'red'}));
    expect(newState[color]).not.toContain('this is a text one');
  })

  it('change sort state', () => {
    let newState = textListReducer(undefined, sortAscendingTextAction(true));
    expect(newState.sortAscending).toBe(true);
  })
})
