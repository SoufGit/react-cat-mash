import axios from 'axios';
import _ from 'lodash';
import { FETCH_OTHER_CAT_LIST, FETCH_TWO_CAT_LIST } from '../constants/actionTypes';
const BASE_URL = 'https://latelier.co/data/cats.json';

const totoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TWO_CAT_LIST:
      console.log('FETCH_TWO_CAT_LISTFETCH_TWO_CAT_LIST', state);
    //   const selectedCats =  _.chain(action.payload) // https://lodash.com/docs
    //       .shuffle() // Shuffle the array of cats
    //       .take(2) // Take the first 2 cats
    //       .value(); // Return result
    //     return [...selectedCats];
    return action.payload;
    case FETCH_OTHER_CAT_LIST:
      console.log('FETCH_OTHER_CAT_LIST', state);
    //   const selectedCats =  _.chain(action.payload) // https://lodash.com/docs
    //       .shuffle() // Shuffle the array of cats
    //       .take(2) // Take the first 2 cats
    //       .value(); // Return result
    //     return [...selectedCats];
    return action.payload;
    default:
      return state;
  }
};

export default totoReducer;