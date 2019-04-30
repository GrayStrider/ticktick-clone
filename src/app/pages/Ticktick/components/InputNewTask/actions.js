export const ADD_TASK = 'ADD_TASK';

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload,
  };
}
