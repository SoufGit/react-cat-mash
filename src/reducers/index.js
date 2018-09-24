import { combineReducers } from 'redux';

import fetchCatList from './catReducer';
import totoList from './totoReducer';

export default combineReducers({ fetchCatList, totoList });