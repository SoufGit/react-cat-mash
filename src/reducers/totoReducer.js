import { FETCH_OTHER_CAT_LIST, FETCH_TWO_CAT_LIST } from '../constants/actionTypes';

const totoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TWO_CAT_LIST:
    return action.payload.map(cat => ({
        ...cat,
        hasVote: true,
      }));
    case FETCH_OTHER_CAT_LIST:
    return action.payload;
    default:
      return state;
  }
};

export default totoReducer;