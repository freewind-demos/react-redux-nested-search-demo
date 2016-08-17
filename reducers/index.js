'use strict';
import {combineReducers} from 'redux';
import initStore from '../store/init-store';

function keyword(state = initStore, action) {
  switch (action.type) {
    case 'SEARCH':
      return Object.assign({}, state, {
        keyword: action.keyword
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({keyword});

export default rootReducer;
