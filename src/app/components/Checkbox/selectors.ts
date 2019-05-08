import { createSelector } from 'reselect';
import { TTaskID, TTasks } from 'app/types/types';

const getTasks = (state) => state.ticktick.data.tasks;

export const getCompleted = createSelector(
  getTasks,
  (_, props) => props.taskID,
  (tasks:TTasks, taskID:TTaskID) => tasks[taskID].completed
)

export const getPriority = createSelector(
  getTasks,
  (_, props) => props.taskID,
  (tasks: TTasks, taskID:TTaskID) => tasks[taskID].priority
)

