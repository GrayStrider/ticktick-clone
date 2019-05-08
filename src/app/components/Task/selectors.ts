import { createSelector } from 'reselect';
import { TTaskID, TTasks } from 'app/types/types';
import { getTasks } from 'app/selectors-global';


export const getTitle = createSelector(
  getTasks,
  (_, props) => props.taskID,
  (tasks:TTasks, taskID:TTaskID) => tasks[taskID].title
)

