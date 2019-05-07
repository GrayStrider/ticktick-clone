import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import ticktick from 'app/reducers/ticktick';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  ticktick: ticktick as any
})
