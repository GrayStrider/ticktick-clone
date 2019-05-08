import { action, createStandardAction } from 'typesafe-actions';
import { ITask } from 'app/types/types';

// export const ADD_TASK = 'ADD_TASK';
//
// export function addTask(payload) {
//   return {
//     type: ADD_TASK,
//     payload,
//   };
// }

export type TaskInput = Pick<ITask, 'title' | 'priority'>
export const addTask = createStandardAction('ADD_TASK').map(
  ({title, priority}: TaskInput): {payload: TaskInput} => ({
    payload: {
      title: title,
      priority: priority
    }
  })
);

export const testAction = () => action('TEST')
