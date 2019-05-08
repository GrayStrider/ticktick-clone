

import { ETabs, ITask, TTaskID } from 'app/types/types';

export const MODIFY_TASK = 'MODIFY_TASK';
export const MODIFY_LIST = 'MODIFY_LIST';
export const DELETE_TASK_FROM_LIST = 'DELETE_TASK_FROM_LIST';
export const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST';

export function modifyTask(payload) {
  return {
    type: MODIFY_TASK,
    payload,
  };
}

export function modifyList(payload) {
  return {
    type: MODIFY_LIST,
    payload,
  };
}
export function deleteTaskFromList (payload) {
  return {
    type: DELETE_TASK_FROM_LIST,
    payload,
  };
}

type TAddTaskToList = {
  taskID: TTaskID,
  type: ETabs
  listID: string
}
export function addTaskToList2 (payload: TAddTaskToList) {
  return {
    type: ADD_TASK_TO_LIST,
    payload,
  };
}
