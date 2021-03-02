import { combineReducers } from 'redux';
import { StatReducers } from './stats/statReducers';

const rootReducers = combineReducers({
	StatReducers,
});

export default rootReducers;
