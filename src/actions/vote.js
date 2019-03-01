// const INCREMENT_VOTE = 'INCREMENT_VOTE';
// const DECREMENT_VOTE = 'DECREMENT_VOTE';

import * as types from '../constants/actionTypes';

export const increment = data => ({
    type: types.INCREMENT_VOTE,
    payload: data,
});

export const decrement = () => ({
    type: types.DECREMENT_VOTE
})