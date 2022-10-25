import { combineReducers } from 'redux';

import list from './List/reducer';
import users from './Users/reducer';

export default combineReducers({list,users});
