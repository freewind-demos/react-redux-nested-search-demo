'use strict';
import initStore from '../store/init-store';
import actionTypes from '../actions/types';

export default function (state = initStore, action) {
  switch (action.type) {
    case 'SEARCH':
      return Object.assign({}, state, {
        keyword: action.keyword
      });
    default:
      return state;
  }
};
