'use strict';
import types from './types';

export function search(keyword) {
  return {type: types.SEARCH, keyword};
}