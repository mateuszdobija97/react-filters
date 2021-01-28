import * as types from '../types/people';

export const changeSearchQuery = (payload) => ({
  type: types.CHANGE_SEARCH_QUERY,
  payload
});