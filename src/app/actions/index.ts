import { createStandardAction } from 'typesafe-actions';
import { ITask } from 'app/types/types';

export type TaskInput = Pick<ITask, 'title' | 'priority'>
export const addTask = createStandardAction('ADD_TASK').map(
  ({title, priority}: TaskInput): {payload: TaskInput} => ({
    payload: {
      title: title,
      priority: priority
    }
  })
);
