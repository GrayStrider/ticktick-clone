import produce from 'immer';
import { SELECT_TASK } from '../Task/actions';
import { ADD_TASK } from '../InputNewTask/actions';


export const initialState = {
  selectedTaskID: null
}

/* eslint-disable default-case, no-param-reassign */
const taskListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_TASK:
        draft.selectedTaskID = action.payload;
        break;
      case ADD_TASK:
        draft.selectedTaskID = action.payload.guid
    }
  });

export default taskListReducer;
