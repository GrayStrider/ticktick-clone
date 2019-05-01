import { ETabs, IList, TListID } from 'app/pages/Ticktick/types/types';

export const SELECT_TAB = 'SELECT_TAB';
export const SELECT_LIST = 'SELECT_LIST';


export function selectTab(payload: ETabs) {
  return {
    type: SELECT_TAB,
    payload,
  };
}

export function selectList(payload: IList) {
  return {
    type: SELECT_LIST,
    payload,
  };
}
