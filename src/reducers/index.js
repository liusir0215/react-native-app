/**
 * Created by liusheng on 6/1/16.
 */
import { combineReducers } from 'redux';
import movieReducers from './movieReducers';

const combinedReducer = combineReducers({
	movieReducers
});

export default combinedReducer;