import axios from 'axios';
import _ from 'lodash';
import { FETCH_CAT_LIST, FETCH_CAT_LIST_ERROR, INCREMENT_VOTE, FETCH_TWO_CAT_LIST } from '../constants/actionTypes';
const BASE_URL = 'https://latelier.co/data/cats.json';

const catReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CAT_LIST:
      return state.length > 0  ? state : action.data;
    case FETCH_CAT_LIST_ERROR:
      return action.error;
    case INCREMENT_VOTE:
          return state.map(cat => {
              let isWinner = false;
            if (cat.id === action.payload.id) {
              cat.nbVote = action.payload.nbVote ? action.payload.nbVote + 1 : 1;
              isWinner = true;
            }
            cat.isWinner = isWinner;
            return cat;
          });
    default:
      return state;
  }
};

export default catReducer;

export const  fetchCatList = () => dispatch =>
  // TODO: use react-promise middleware to auto dispatch laoding, success and fail actions
  axios
    .get(BASE_URL)
    .then(response => //{
        //console.log('response', response);
        
     //return( 
         dispatch({
        type: FETCH_CAT_LIST,
        data: response.data.images,
      }),
    //   dispatch({
    //     type: FETCH_TWO_CAT_LIST,
    //     data: response.data.images,
    //   })
     //)}
    )
    // TODO: dispatch error action
    // eslint-disable-next-line no-console
    .catch(error => 
        dispatch({
            type: FETCH_CAT_LIST_ERROR,
            error: true,
          }));