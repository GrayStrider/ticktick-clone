export const TOGGLE_DONE = 'TOGGLE_DONE';
export const SELECT_TASK = 'SELECT_TASK';

export function toggleDone(payload) {
  return {
    type: TOGGLE_DONE,
    payload,
  };
}

export function selectTask(payload) {
  return {
    type: SELECT_TASK,
    payload,
  };
}
