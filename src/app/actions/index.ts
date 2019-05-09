import { createStandardAction } from 'typesafe-actions';
import { TaskInput } from 'app/types/types';

export const addTask = createStandardAction('ADD_TASK').map(
  ({title, priority}: TaskInput): {payload: TaskInput} => ({
    payload: {
      title: title,
      priority: priority
    }
  })
);

export const sortList = createStandardAction('SORT_LIST').map(
  (sortType: string): {payload: {sortType: string}} => ({
    payload: {
      sortType
    }
  })
)
