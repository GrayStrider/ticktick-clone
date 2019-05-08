import { createSelector } from 'reselect';

const getTasks = (state) => state.ticktick.data.tasks;

export const getCompleted = createSelector(
  getTasks,
  (_, props) => props.taskID,
  (tasks, taskID) => tasks[taskID].completed
)

