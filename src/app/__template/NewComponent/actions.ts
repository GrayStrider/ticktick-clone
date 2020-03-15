export const DEFAULT_ACTION = 'DEFAULT_ACTION';

export function defaultAction(payload) {
  return {
    type: DEFAULT_ACTION,
    payload,
  };
}
