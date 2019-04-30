export const SORT_LIST = 'SORT_LIST';

export function sortListAction(payload) {
  return {
    type: SORT_LIST,
    payload,
  };
}
