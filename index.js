// Example
import {combineReducers} from 'redux';

const reducerA = (state = {foo: ''}, action) => {
  switch (action.type) {
    case 'A':
      return {
        ...state,
        foo: action.value,
      };
    default:
      return state;
  }
};

const reducerB = (state = {bar: ''}, action) => {
  switch (action.type) {
    case 'B':
      return {
        ...state,
        bar: action.value,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({reducerA, reducerB});

const actionA = {
  type: 'A',
  value: 'A',
};

console.log(rootReducer(undefined, actionA));
