import { combineReducers } from 'redux';

import fetchCatList from './catReducer';

export default combineReducers({ fetchCatList });