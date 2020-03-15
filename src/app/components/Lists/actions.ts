import { ETabs, TListID } from 'app/types/types';

export const SELECT_TAB = 'SELECT_TAB';
export const SELECT_LIST = 'SELECT_LIST';

type Lists = {
  readonly id: TListID
  name: string
  readonly type: ETabs
}

export function selectTab(payload: ETabs) {
  return {
    type: SELECT_TAB,
    payload,
  };
}

export function selectList(payload: Lists) {
  return {
    type: SELECT_LIST,
    payload,
  };
}
