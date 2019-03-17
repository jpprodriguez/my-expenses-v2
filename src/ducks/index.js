import { combineReducers } from 'redux';
import reducer from './reducers';
import actions from './actions';
import selectors from './selectors';
import * as types from './types';

const rootReducer = combineReducers({
  auth: reducer
});

export default rootReducer;
export { actions, types, selectors };
